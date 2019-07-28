var express = require('express')
var router = express.Router()
const pdfController = require('../controllers/PdfController')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send({ message: 'Welcome to the PdfGenerator Service!' })
})
router.post('/api/generate', pdfController.generate)

module.exports = router
