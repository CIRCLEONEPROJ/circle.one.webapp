import { Inject, Injectable } from '@angular/core';
import { Web3Service } from './web3.service';
import { PROVE_CONTRACT_ADDRESS } from '../tokens/prove-contract-address.token';
import { Contract } from 'web3/types';
import { proveContractAbi } from '../abi/prove-contract-abi';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { PURCHASE_CONTRACT_ADDRESS } from '../tokens/purchase-contract-address.token';

@Injectable()
export class ProveContractService {
  private abi = proveContractAbi;
  private contract: Contract;

  constructor( private web3Service: Web3Service,
               @Inject(PROVE_CONTRACT_ADDRESS) private address,
               @Inject(PURCHASE_CONTRACT_ADDRESS) private purchaseAddress ) {
    this.init();
    this.allowance();
  }

  async approve( price: number ): Promise<any> {
    const account = await this.web3Service.getAccount();
    await this.contract.methods.approve(this.purchaseAddress, price).send({
        from: account
      }
    );
  }

  allowance(): Observable<any> {
    // this.contract.methods.allowance('0x18f4CC605F50c79Db9faD8ba7D333372e4A1923d', '0x18f4CC605F50c79Db9faD8ba7D333372e4A1923d').call()
    //   .then(( data ) => console.log(data))
    //   .catch(( err ) => console.log(err));
    return of(null);
  }

  increaseApproval(): Observable<any> {
    return of(null);
  }

  decreaseApproval(): Observable<any> {
    return of(null);
  }

  async getBalance(): Promise<number> {
    const account = await this.web3Service.getAccount();
    return this.contract.methods.balanceOf(account).call();
  }

  private init() {
    const web3 = this.web3Service.web3;
    this.contract = new web3.eth.Contract(this.abi, this.address);
  }

}
