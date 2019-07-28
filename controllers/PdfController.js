'use strict'
const pdfGenerator = require('./PdfGenerator')
const fs = require('fs')
var path = require('path')

module.exports = {
  generate (req, res) {
    let pdfDoc = pdfGenerator.generate(req.body)
    console.log("PDFDoc:"+pdfDoc.data);
    res.status(201)
    fs.readFile(path.resolve(__dirname, '../output.pdf'), function (err, data) {
      console.log('Sending back pdf document')
      console.log('File Data:'+ data);
      res.setHeader(
        'Content-disposition',
        'inline; filename="ApplicationForm.pdf"'
      )
      res.contentType('application/pdf')
      res.sendFile(path.resolve(__dirname, '../output.pdf'))
    })
  }
}
