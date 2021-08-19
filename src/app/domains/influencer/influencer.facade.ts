import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Influencer } from './models';
import { InfluencerState } from './state/influencer.state';

@Injectable()
export class InfluencerFacade {
  influencers$ = new Observable<Influencer[]>();
  constructor(private influencerState: InfluencerState) {
    this.influencers$ = this.influencerState.influencers$;
  }

  loadInfluencers(): void {
    this.influencerState.loadInfluencers();
  }
}
