import { createFeatureSelector, createSelector } from '@ngrx/store';
import { InfluencersState } from '../models/influencer-state.model';
import * as influencerActions from './influencer.actions';

export const influencersFeatureKey = 'influencers';

export const influencersReducer = (
  state: InfluencersState = { items: [] },
  action: influencerActions.InfluencersActions = null,
): InfluencersState => {
  switch (action.type) {
    case influencerActions.LOAD_SUCCESS:
      const loadedItems = action.payload.items || [];
      return Object.assign({}, state, {
        items: [...loadedItems],
      });

    case influencerActions.LOAD_FAILED:
      return state;

    default:
      return state;
  }
};

export const getInfluencersFeature = createFeatureSelector<InfluencersState>(influencersFeatureKey);

export const getInfluencersItems = createSelector(getInfluencersFeature, (state: InfluencersState) => state.items);
