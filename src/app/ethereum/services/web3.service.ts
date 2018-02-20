import { Inject, Injectable } from '@angular/core';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { INFURA_ADDRESS } from '../tokens/infura-address.token';

const Web3 = require('web3');

@Injectable()
export class Web3Service {
  web3;

  constructor( @Inject(INFURA_ADDRESS) private infuraAddress: string ) {
    this.init();
  }

  private init() {
    const winWeb3 = (window as any).web3;
    if ( typeof winWeb3 !== 'undefined' ) {
      this.web3 = new Web3(winWeb3.currentProvider);
    } else {
      const provider = new Web3.providers.HttpProvider(this.infuraAddress);
      this.web3 = new Web3(provider);
    }
  }


  async getAccount(): Promise<string> {
    if ( this.web3 ) {
      const accounts = await this.web3.eth.getAccounts();
      if ( accounts.length ) {
        return accounts[ 0 ];
      }
    }
    throw(new Error('No account found'));
  }

  async checkAccount() {
    fromPromise(this.web3.eth.getAccounts())
      .subscribe(( res ) => console.log(res));
    const accounts = await this.web3.eth.getAccounts();
    console.log(accounts);
  }

}
