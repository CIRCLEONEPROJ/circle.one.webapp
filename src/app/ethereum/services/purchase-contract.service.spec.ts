import { TestBed, inject } from '@angular/core/testing';

import { PurchaseContractService } from './purchase-contract.service';

describe('PurchaseContractService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PurchaseContractService]
    });
  });

  it('should be created', inject([PurchaseContractService], (service: PurchaseContractService) => {
    expect(service).toBeTruthy();
  }));
});
