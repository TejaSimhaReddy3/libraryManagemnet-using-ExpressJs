const express = require('express');

const BookReturnedController = require('../libraryManagement/controller/bookReturned/BookReturnedController');
const BookReturnedRepo = require('../libraryManagement/repo/bookReturned/BookReturnedRepo');
const BookReturnedService = require('../libraryManagement/services/bookReturned/BookReturnedService');

global.bookReturnedRepo = new BookReturnedRepo();
global.bookReturnedService = new BookReturnedService(bookReturnedRepo);

const bookIssuedController = new BookReturnedController();

const router = express.Router();

router.get('/get',bookIssuedController.getDetails);
router.post('/post/:id',bookIssuedController.postBooks);

module.exports = router;