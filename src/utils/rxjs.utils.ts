import { Observable } from 'rxjs/observable';
import { defer } from 'rxjs/observable/defer';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { fromPromise } from 'rxjs/observable/fromPromise';

export function rxifyPromiseFn<T>(promiseFn: () => PromiseLike<T>): Observable<T> {
  return defer(() => fromPromise(promiseFn()));
}