import { Inject, Injectable } from '@angular/core';
import { Web3Service } from './web3.service';
import { PROVE_CONTRACT_ADDRESS } from '../tokens/prove-contract-address.token';
import { Contract } from 'web3/types';
import { proveContractAbi } from '../abi/prove-contract-abi';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ProveContractService {
  private abi = proveContractAbi;
  private contract: Contract;

  constructor( private web3Service: Web3Service,
               @Inject(PROVE_CONTRACT_ADDRESS) private address ) {
    this.init();
    this.allowance();
  }

  approve(): Observable<any> {
    return of(null);
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

  private init() {
    const web3 = this.web3Service.web3;
    this.contract = new web3.eth.Contract(this.abi, this.address);
  }

}
