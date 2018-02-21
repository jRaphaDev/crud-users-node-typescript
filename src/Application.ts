
import "reflect-metadata";

import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

class Application {

  public express

  constructor() {
    this.express = express()
    this.middleware()
  }

  private middleware() {
    this.express.use(logger('dev'))
    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({ extended: false }))
  }

}

export default new Application().express
