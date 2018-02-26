import { Observable } from 'rxjs/observable';
import { User } from './../entity/User';

import { getConnection } from 'typeorm';

import { Connection } from 'typeorm/connection/Connection';
import { rxifyPromiseFn } from '../utils/rxjs.utils';

export class UserRepository {

  private connection = getConnection().manager;

  post(user: User): Observable<User> {
    return rxifyPromiseFn(() => this.connection.save(user))
  }

  findOne(id: number): Observable<User> {
    return rxifyPromiseFn(() => this.connection.findOneById(User, id))
  }

  findAll(): Observable<User[]> {
    return rxifyPromiseFn(() => this.connection.find(User))
  }

}