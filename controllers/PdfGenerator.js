'use strict'
const fs = require('fs')
const PDFDocument = require('pdfkit')
var path = require('path')

module.exports = {
  generate (student) {
    console.log('inside generate method')
    console.log(student.name);
    console.log(student.fatherName);
    console.log(student.motherName);
    console.log(student.email);
    console.log(student.mobileNumber);
    console.log(student.dateOfBirth);
    const doc = new PDFDocument()
    console.log(
      'Current Directory:' +
        path.resolve(__dirname, '../GeneratedFiles/output.pdf')
    )
    //fs.writeFile('../GenratedFiles/output.pdf');
    doc.pipe(fs.createWriteStream('output.pdf'))
    if (!student) {
      return doc
    }
    doc.fontSize(35).text('Application Form', 100, 100)
    doc
      .font('Times-Bold')
      .fontSize(25)
      .text('Student Name: ' + student.name, 50, 150)
    doc.fontSize(25).text('Father Name: ' + student.fatherName, 50, 200)
    doc.fontSize(25).text('Mother Name: ' + student.motherName, 50, 250)
    doc.fontSize(25).text('Email: ' + student.email, 50, 300)
    doc.fontSize(25).text('MobileNumber: ' + student.mobileNumber, 50, 350)
    doc.fontSize(25).text('Date Of Birth: ' + student.dateOfBirth, 50, 400)
    console.log('Completed preparing the document')
    doc.save()
    doc.end()

    // return fs.writeFile('ApplicationForm.pdf','',function(error){
    //   if(err) throw err;
    //   console.log('file is created successfully');
    // });
    return doc
    //return "File Created";
  }
}
