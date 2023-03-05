import { TestBed } from '@angular/core/testing';

import { SharedFeatureService } from './shared-feature.service';

describe('SharedFeatureService', () => {
  let service: SharedFeatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedFeatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
