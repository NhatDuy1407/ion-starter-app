import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfluencerPage } from './pages/influencer.page';

const routes: Routes = [
  {
    path: '',
    component: InfluencerPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfluencerPageRoutingModule {}
