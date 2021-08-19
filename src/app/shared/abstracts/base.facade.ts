import { MemoizedSelector, Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as model from '../state/state.model';

export abstract class BaseFacade {
  constructor(protected appState$: Store<model.State>) {}

  protected getState(
    store: Store<model.State>,
    // eslint-disable-next-line @typescript-eslint/ban-types
    selector: MemoizedSelector<object, model.State[]>,
  ): Observable<model.State[]> {
    return store.pipe(select(selector));
  }
}
