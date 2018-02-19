import { ModuleWithProviders, NgModule } from '@angular/core';
import { PROVE_CONTRACT_ADDRESS } from './tokens/prove-contract-address.token';
import { PURCHASE_CONTRACT_ADDRESS } from './tokens/purchase-contract-address.token';
import { Web3Service } from './services/web3.service';
import { ProveContractService } from './services/prove-contract.service';
import { PurchaseContractService } from './services/purchase-contract.service';
import { IEthereumModuleConfig } from './interfaces/ethereum-module-config.interface';

@NgModule({
  imports: [],
  declarations: []
})
export class EthereumModule {
  static forRoot( config: IEthereumModuleConfig ): ModuleWithProviders {
    return {
      ngModule: EthereumModule,
      providers: [
        { provide: PROVE_CONTRACT_ADDRESS, useValue: config.proveContractAddress },
        { provide: PURCHASE_CONTRACT_ADDRESS, useValue: config.purchaseContractAddress },
        Web3Service,
        ProveContractService,
        PurchaseContractService
      ]
    };
  }
}
