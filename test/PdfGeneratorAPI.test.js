'use strict'

var app = require('../app'),
  chai = require('chai'),
  request = require('supertest'),
  nock = require('nock')

var expect = chai.expect

describe('PDF Generator API Integration Tests', function () {
  describe('#GET', function () {
    it('should welcome message when accessing the root url', function (done) {
      request(app)
        .get('/')
        .end(function (err, res) {
          expect(res.status).to.equal(200)
          console.log(res.status)
          console.log(res.body)
          console.log(err)
          expect('Welcome to the PdfGenerator Service!').to.equal(
            res.body.message
          )
          done()
        })
    })
  })
})
