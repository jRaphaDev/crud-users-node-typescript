import { CrudRepository } from './../repository/CrudRepository';
import { Observable } from 'rxjs/observable';
import { User } from './../entity/User';

import { getConnection } from 'typeorm';

import { Connection } from 'typeorm/connection/Connection';
import { rxifyPromiseFn } from '../utils/rxjs.utils';

export class UserRepository implements CrudRepository<User, number> {

  private connection

  constructor(){
    this.connection = getConnection().manager
  }

  create(user: User): Observable<User> {
    return rxifyPromiseFn(() => this.connection.save(user))
  }

  findOne(id: number): Observable<User> {
    return rxifyPromiseFn(() => this.connection.findOneById(User, id))
  }

  findAll(): Observable<User[]> {
    return rxifyPromiseFn(() => this.connection.find(User))
  }

  update(object: User): void {
    throw new Error("Method not implemented.");
  }

  delete(id: number): void {
    throw new Error("Method not implemented.");
  }

}