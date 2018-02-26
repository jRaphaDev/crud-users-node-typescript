import { User } from './entity/User';

import { Connection, createConnection } from 'typeorm';

import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import "reflect-metadata";
class Application {

  public express

  constructor() {
    this.express = express()
    this.middleware()
    this.getCon()
  }

  private middleware() {
    this.express.use(logger('dev'))
    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({ extended: false }))
  }

  private async getCon() {
    const connection: Connection = await createConnection({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "LabUsers",
      entities: [ User ],
      synchronize: true
    });
  }

}

export default new Application().express
