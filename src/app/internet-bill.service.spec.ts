import { TestBed } from '@angular/core/testing';

import { InternetBillService } from './internet-bill.service';

describe('InternetBillService', () => {
  let service: InternetBillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternetBillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
