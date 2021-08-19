import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InfluencerFacade } from '../influencer.facade';
import { Influencer } from '../models';

@Component({
  selector: 'app-influencer',
  templateUrl: 'influencer.page.html',
  styleUrls: ['influencer.page.scss'],
})
export class InfluencerPage implements OnInit {
  influencers$: Observable<Influencer[]>;

  constructor(private influencerFacade: InfluencerFacade) {}

  ngOnInit(): void {
    this.loadInfluencers();
  }

  private loadInfluencers(): void {
    this.influencers$ = this.influencerFacade.influencers$;
    this.influencerFacade.loadInfluencers();
  }
}
