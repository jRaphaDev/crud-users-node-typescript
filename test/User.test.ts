import * as mocha from 'mocha'
import * as chai from 'chai'
import chaiHttp = require('chai-http')

import application from '../src/Application'

chai.use(chaiHttp)

const expect = chai.expect

describe('GET api/v1/users', () => {

  it('responds with JSON array', () => {
    return chai.request(application)
      .get('/api/v1/users')
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('array');
        expect(res.body).to.have.length(2);
      })
  })

  it('should include Someone', () => {
    return chai.request(application)
      .get('/api/v1/users')
      .then(res => {
        let someone = res.body.find(user => user.name === 'Raphael Freitas');
        expect(someone).to.exist;
        expect(someone).to.have.all.keys([ 'id', 'name' ]);
      });
  });

})

describe('GET api/v1/users/:id', () => {

  it('responds with single JSON object', () => {
    return chai.request(application).get('/api/v1/users/1')
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
      });
  });

  it('should return Raphael Freitas', () => {
    return chai.request(application).get('/api/v1/users/1')
      .then(res => {
        expect(res.body.user.name).to.equal('Raphael Freitas');
      });
  });

});
