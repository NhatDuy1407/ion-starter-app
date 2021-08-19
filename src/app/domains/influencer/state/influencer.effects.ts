import { Injectable } from '@angular/core';
import { Logger } from '@app/core/log.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Influencer } from '../models';
import { InfluencerService } from '../services/influencer.service';
import * as influencerActions from './influencer.actions';

@Injectable()
export class InfluencerEffects {
  log = new Logger('Influencer Effects');

  loadInfluencers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(influencerActions.LOAD),
      mergeMap(() =>
        this.influencersService.getInfluencers().pipe(
          map((influencers: Influencer[]) => new influencerActions.LoadSuccessAction({ items: influencers })),
          catchError((err: any) => {
            this.log.error(err);
            return of(new influencerActions.LoaFailedAction());
          }),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private influencersService: InfluencerService) {}
}
