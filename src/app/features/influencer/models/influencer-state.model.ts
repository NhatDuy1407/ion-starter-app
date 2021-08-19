import { State } from '@app/shared/state/state.model';
import { Influencer } from './influencer.model';

export interface InfluencersState extends State {
  items: Influencer[];
}
