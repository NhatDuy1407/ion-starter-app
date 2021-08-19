import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { InfluencerPageRoutingModule } from './influencer-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { InfluencerFacade } from './influencer.facade';
import { InfluencerState } from './state/influencer.state';
import { InfluencerService } from './services/influencer.service';
import { InfluencerPage } from './pages/influencer.page';
import { EffectsModule } from '@ngrx/effects';
import { InfluencerEffects } from './state/influencer.effects';
import { influencersFeatureKey, influencersReducer } from './state/influencer.reducer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    StoreModule.forFeature(influencersFeatureKey, influencersReducer),
    EffectsModule.forFeature([InfluencerEffects]),
    InfluencerPageRoutingModule,
  ],
  declarations: [InfluencerPage],
  providers: [InfluencerFacade, InfluencerState, InfluencerService],
})
export class InfluencerModule {}
