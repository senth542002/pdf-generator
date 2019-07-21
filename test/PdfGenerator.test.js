'use strict'

var chai = require('chai'),
  request = require('supertest'),
  nock = require('nock'),
  chaiFiles = require('chai-files'),
  path = require('path'),
  fs = require('fs')

chai.use(chaiFiles)
var pdfGenerator = require('../controllers/PdfGenerator')
var expect = chai.expect
var file = chaiFiles.file
var dir = chaiFiles.dir
var assert = chai.assert

let student = {
  name: 'Only letters',
  fatherName: 'Only letters',
  motherName: 'Only letters',
  email: 'Email is not valid',
  mobileNumber: 'Mobile is not valid',
  dateOfBirth: 'Cannot be empty'
}

let emptyStudent = {
  name: '',
  fatherName: '',
  motherName: '',
  email: '',
  mobileNumber: '',
  dateOfBirth: ''
}

describe('Generates a PDF file for a given input', function () {
  describe('Genetate an empty pdf file', function () {
    it('Given empty object, the pdf generator creates empty pdf file', function () {
      var absolutePath = path.resolve('Relative file path')
      console.log('Directory Name:' + __dirname)
      console.log('FileName:' + path.dirname(__filename))
      pdfGenerator.generate(emptyStudent)
      expect(file('output.pdf')).to.exist
      expect(file('output.pdf')).to.be.empty
      //assert.notIsEmptyFile(path.resolve(__dirname,'../output.pdf'), path.resolve(__dirname,'../output.pdf'));
    })
  })

  describe('Genetate an pdf file with data', function () {
    it('Given data object, the pdf generator creates pdf file with data', function () {
      var absolutePath = path.resolve('Relative file path')
      console.log('Directory Name:' + __dirname)
      console.log('FileName:' + path.dirname(__filename))
      let filePath = path.resolve(__dirname, '../output.pdf')
      pdfGenerator.generate(student)
      expect(file('output.pdf')).to.exist
      //expect(file('output.pdf')).to.contain('Application Form');

      //console.log('File Path:'+file('output.pdf').path());

      expect(file(filePath)).to.equal(file('output.pdf'))
      //expect(file(filePath)).to.not.be.empty;

      //assert.notIsEmptyFile(path.resolve(__dirname,'../output.pdf'), path.resolve(__dirname,'../output.pdf'));
    })
  })
})
