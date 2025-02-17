import { TestBed } from '@angular/core/testing';

import { RatingResolverService } from './rating-resolver.service';

describe('RatingResolverService', () => {
  let service: RatingResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RatingResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
