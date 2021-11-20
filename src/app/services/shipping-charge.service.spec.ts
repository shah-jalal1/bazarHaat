import { TestBed } from '@angular/core/testing';

import { ShippingChargeService } from './shipping-charge.service';

describe('ShippingChargeService', () => {
  let service: ShippingChargeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShippingChargeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
