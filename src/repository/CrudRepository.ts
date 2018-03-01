import { Observable } from 'rxjs/observable';

export interface CrudRepository<Object, Identifier> {

  create(object: Object): Observable<Object>
  findOne(id: Identifier): Observable<Object>
  findAll(): Observable<Object[]>
  update(object: Object): void
  delete(id: Identifier): void

}