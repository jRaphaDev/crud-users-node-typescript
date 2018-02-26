import { User } from './../src/entity/User';
import * as mocha from 'mocha'
import * as chai from 'chai'
import chaiHttp = require('chai-http')

import application from '../src/index'

chai.use(chaiHttp)

const expect = chai.expect

describe.only('GET api/v1/users', () => {

  it('responds with JSON array', (done) => {
    chai.request(application)
      .get('/api/v1/users')
      .then(res => {
        expect(res).to.have.status(200)
        expect(res.body.length).equal(63)
        done();
      })
  })

  it('should include Someone', (done) => {
    chai.request(application)
      .get('/api/v1/users/1')
      .then(res => {
        expect(res.body).to.exist;
        expect(res.body).to.have.all.keys([ 'id', 'name' ]);
        done()
      });
  });

})

describe('GET api/v1/users/:id', () => {

  it('responds with single JSON object', () => {
    return chai.request('http://localhost/3000').get('/api/v1/users/1')
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
      });
  });

  it('should return Raphael Freitas', () => {
    return chai.request('http://localhost/3000').get('/api/v1/users/1')
      .then(res => {
        expect(res.body.user.name).to.equal('Raphael Freitas');
      });
  });

});
