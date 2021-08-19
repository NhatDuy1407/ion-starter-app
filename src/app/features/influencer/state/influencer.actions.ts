import { Action } from '@ngrx/store';
import { Influencer } from '../models';
export const LOAD = '[Influencers Page] Load Influencers';
export const LOAD_SUCCESS = '[Influencers API] Influencers Loaded Success';
export const LOAD_FAILED = '[Influencers API] Influencers Loaded Error';

export class LoadAction implements Action {
  readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: { items: Influencer[] }) {}
}

export class LoaFailedAction implements Action {
  readonly type = LOAD_FAILED;
}

export type InfluencersActions = LoadAction | LoadSuccessAction | LoaFailedAction;
