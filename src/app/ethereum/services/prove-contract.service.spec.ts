import { TestBed, inject } from '@angular/core/testing';

import { ProveContractService } from './prove-contract.service';

describe('ProveContractService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProveContractService]
    });
  });

  it('should be created', inject([ProveContractService], ( service: ProveContractService) => {
    expect(service).toBeTruthy();
  }));
});
