import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Influencer } from '../models';

@Injectable()
export class InfluencerService {
  readonly api = '/api/influencers';
  readonly isMock = true;
  data: Influencer[];

  constructor(private http: HttpClient) {}

  getInfluencers(): Observable<Influencer[]> {
    if (this.isMock) {
      return this.http.get<Influencer[]>('assets/data/influencers.json').pipe(
        map((data: Influencer[]) => {
          this.data = data.map((item) => new Influencer(item));
          return this.data;
        }, this),
      );
    } else {
      return this.http.get<Influencer[]>(this.api).pipe(
        map((data: Influencer[]) => {
          this.data = data.map((item) => new Influencer(item));
          return this.data;
        }, this),
      );
    }
  }

  createInfluencer(influencer: Influencer): Observable<Influencer> {
    if (this.isMock) {
      return of(influencer);
    } else {
      return this.http.post<Influencer>(this.api, influencer);
    }
  }

  updateInfluencer(influencer: Influencer): Observable<Influencer> {
    if (this.isMock) {
      return of(influencer);
    } else {
      return this.http.put<Influencer>(`${this.api}/${influencer.id}`, influencer);
    }
  }
}
