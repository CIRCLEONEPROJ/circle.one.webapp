import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { v1 } from 'uuid';
import { PurchaseContractService } from '../../ethereum/services/purchase-contract.service';
import { ProveContractService } from '../../ethereum/services/prove-contract.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

export interface ITransaction {
  id: string;
  date?: number;
  item: any;
  hash?: string;
}

@Injectable()
export class PurchaseService {
  private key = 'transactions';
  private _transactions = new BehaviorSubject<ITransaction[]>([]);

  constructor( private storageService: LocalStorageService,
               private authService: AuthService,
               private purchaseContractService: PurchaseContractService,
               private proveContractService: ProveContractService ) {

    this.init();
  }

  get transactions(): Observable<ITransaction[]> {
    return this._transactions.asObservable();
  }

  async makePurchase( item: any ): Promise<ITransaction> {
    const transaction: ITransaction = {
      id: v1(),
      date: Date.now(),
      item
    };
    transaction.item.price = parseInt(transaction.item.price, 10);
    await this.proveContractService.approve(transaction.item.price);
    transaction.hash = await this.purchaseContractService.purhase(transaction.item.price, transaction.id);
    this.appendTransaction(transaction);
    return transaction;
  }

  private appendTransaction( transaction: ITransaction ) {
    const data = [ transaction, ...this._transactions.value ];
    this.storageService.store(this.key, data);
    this._transactions.next(data);
  }

  private init() {
    const storedData = this.storageService.retrieve(this.key);
    if ( !storedData || !Array.isArray(storedData) ) {
      this.storageService.store(this.key, []);
    } else {
      this._transactions.next(storedData);
    }
  }

}
