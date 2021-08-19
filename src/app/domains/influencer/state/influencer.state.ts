import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Influencer } from '../models';
import { InfluencersState } from '../models/influencer-state.model';
import * as influencerActions from './influencer.actions';
import { getInfluencersItems } from './influencer.reducer';

@Injectable()
export class InfluencerState {
  influencers$ = new Observable<Influencer[]>();

  constructor(private store: Store<InfluencersState>) {
    this.influencers$ = this.store.pipe(select(getInfluencersItems));
  }

  loadInfluencers(): void {
    // clear data
    this.store.dispatch(new influencerActions.LoadSuccessAction({ items: [] }));

    this.store.dispatch(new influencerActions.LoadAction());
  }
}
