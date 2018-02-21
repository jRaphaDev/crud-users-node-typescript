import * as mocha from 'mocha'
import * as chai from 'chai'
import chaiHttp = require('chai-http')

import application from '../src/Application'

chai.use(chaiHttp)

const expect = chai.expect

describe('GET /', () => {

  it('GET / Running application', () => {
    return chai.request(application)
      .get('/')
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res).to.be.json;
      });
  })

})
