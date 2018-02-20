import { Inject, Injectable } from '@angular/core';
import { Web3Service } from './web3.service';
import { PURCHASE_CONTRACT_ADDRESS } from '../tokens/purchase-contract-address.token';
import { Contract } from 'web3/types';
import { purchaseContractAbi } from '../abi/purchase-contract-abi';
import { SHA256 } from 'crypto-js';

@Injectable()
export class PurchaseContractService {
  private abi = purchaseContractAbi;
  private contract: Contract;
  etherscanLink: string;

  constructor( private web3Service: Web3Service,
               @Inject(PURCHASE_CONTRACT_ADDRESS) private address: string ) {
    this.init();
  }

  async purhase( price: number, transactionId: string ): Promise<string> {
    const hash = `0x${SHA256(transactionId).toString()}`;
    console.log(hash);
    const account = await this.web3Service.getAccount();
    await this.contract.methods.purchase(price, hash).send({
        from: account
      }
    );
    return hash;
  }

  async checkPurchase( transactionId: string ): Promise<boolean> {
    const hash = `0x${SHA256(transactionId).toString()}`;
    return await this.contract.methods.purchased(hash).call();
  }


  private init() {
    this.etherscanLink = `https://kovan.etherscan.io/address/${this.address}#readContract`;
    const web3 = this.web3Service.web3;
    this.contract = new web3.eth.Contract(this.abi, this.address);
  }

}
