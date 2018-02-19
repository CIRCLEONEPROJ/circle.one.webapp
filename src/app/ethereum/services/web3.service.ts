import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { fromPromise } from 'rxjs/observable/fromPromise';

const Web3 = require('web3');

@Injectable()
export class Web3Service {
  web3;

  constructor() {
    this.init();
  }

  private init() {
    const winWeb3 = (window as any).web3;
    if ( typeof winWeb3 !== 'undefined' ) {
      this.web3 = new Web3(winWeb3.currentProvider);
    } else {
      const provider = new Web3.providers.HttpProvider('');
      this.web3 = new Web3(provider);
    }
  }


  getAccount(): Observable<any> {
    if ( this.web3 ) {
      return fromPromise(this.web3.eth.getAccounts());
    }
    return of(null);
  }

}
