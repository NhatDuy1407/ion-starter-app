import { TestBed } from '@angular/core/testing';

import { InfluencerService } from './influencer.service';

xdescribe('InfluencerService', () => {
  let service: InfluencerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfluencerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
