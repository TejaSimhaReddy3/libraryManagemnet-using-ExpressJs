const express = require('express');
const ReaderDetailsController = require('../libraryManagement/controller/readerDetails/ReaderDetailsController');
const ReaderDetailsRepo = require('../libraryManagement/repo/readerDetails/ReaderDetailsRepo');
const ReaderDetailServices = require('../libraryManagement/services/readerDetails/ReaderDetailServices');

//  declaring BookDetailsRepo file globally so that we can use it any where without importing
global.readerDetailsRepo = new ReaderDetailsRepo();
global.readerDetailsServices = new ReaderDetailServices(global.readerDetailsRepo);

//  to call methods through this object
const readerDetailsController = new ReaderDetailsController();

const router = express.Router();

//  API calls for book details
router.get('/get',readerDetailsController.get);
router.post('/addReader',readerDetailsController.post);
// router.put('/updateBooks',bookDetailsControllers.updateBooks);

module.exports = router;