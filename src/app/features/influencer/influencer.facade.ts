import { Injectable } from '@angular/core';
import { BaseFacade } from '@app/shared/abstracts/base.facade';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Influencer, InfluencersState } from './models';
import * as influencerActions from './state/influencer.actions';
import { getInfluencersItems } from './state/influencer.reducer';

@Injectable()
export class InfluencerFacade extends BaseFacade {
  influencers$ = new Observable<Influencer[]>();
  constructor(private store: Store<InfluencersState>) {
    super(store);
    this.influencers$ = this.getState(store, getInfluencersItems) as Observable<Influencer[]>;
  }

  loadInfluencers(): void {
    // clear data
    this.store.dispatch(new influencerActions.LoadSuccessAction({ items: [] }));
    this.store.dispatch(new influencerActions.LoadAction());
  }
}
