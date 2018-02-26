import application from './Application'

import { UserController } from './controller/UserController';

import { useExpressServer } from 'routing-controllers';
import { Connection, createConnection } from 'typeorm';

const port = process.env.PORT || 3000

useExpressServer(application, {
  controllers: [ UserController ]
})

export default application.listen(port, (err) => {
  if (err) return console.log(err)
  return console.log(`server is listening on ${port}`)
})