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
    });

    it('should send back pdf file', function (done) {
      let data = {
         "name": "name",
         "fatherName": "Father Name",
         "motherName": "Mother Name",
         "email": "Email Id",
         "mobileNumber": "Mobile Number",
         "dateOfBirth": "2019-07-14T13:34:00.000",
         "applicationNumber": "116"
      }

      request(app)
        .get('/api/generate')
        .send(data)
        .expect('Content-Type', /pdf/)
        .end(function (err, res) {
          expect(res.status).to.equal(201)
          console.log(res.status)
          console.log(res.body)
          console.log(err)
          // expect('Welcome to the PdfGenerator Service!').to.equal(
          //   res.body.message
          // )
          done()
        })
    });
  })
})
