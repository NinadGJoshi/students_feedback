import { TestBed } from '@angular/core/testing';

import { FeebackStatusResolverService } from './feeback-status-resolver.service';

describe('FeebackStatusResolverService', () => {
  let service: FeebackStatusResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeebackStatusResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
