import { Inject, Injectable } from '@angular/core';
import { Web3Service } from './web3.service';
import { PURCHASE_CONTRACT_ADDRESS } from '../tokens/purchase-contract-address.token';
import { Contract } from 'web3/types';
import { purchaseContractAbi } from '../abi/purchase-contract-abi';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { SHA256 } from 'crypto-js';

@Injectable()
export class PurchaseContractService {
  private abi = purchaseContractAbi;
  private purchaseContract: Contract;

  constructor( private web3Service: Web3Service,
               @Inject(PURCHASE_CONTRACT_ADDRESS) private address: string ) {
    this.init();
  }

  purhase( price: number, hash: string ): Observable<any> {
    console.log(SHA256('test').toString());
    return of(null);
  }

  checkPurchase(): Observable<any> {
    return of(null);
  }


  private init() {
    const web3 = this.web3Service.web3;
    this.purchaseContract = new web3.eth.Contract(this.abi, this.address);
  }

}
