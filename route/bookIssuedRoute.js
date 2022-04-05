const express = require('express');

const BookIssuedController = require('../libraryManagement/controller/bookIssued/BookIssuedController');
const BookIssuedRepo = require('../libraryManagement/repo/bookIssued/BookIssuedRepo');
const BookIssuedServices = require('../libraryManagement/services/bookIssuedServices/BookIssuedServices');

global.bookIssuedRepo = new BookIssuedRepo();
global.bookIssuedServices = new BookIssuedServices(bookIssuedRepo);

const bookIssuedController = new BookIssuedController();

const router = express.Router();

router.get('/get',bookIssuedController.getDetails);
router.post('/post/:id',bookIssuedController.postBooks);

module.exports = router