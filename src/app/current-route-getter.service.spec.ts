import { TestBed } from '@angular/core/testing';

import { CurrentRouteGetterService } from './current-route-getter.service';

describe('CurrentRouteGetterService', () => {
  let service: CurrentRouteGetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentRouteGetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
