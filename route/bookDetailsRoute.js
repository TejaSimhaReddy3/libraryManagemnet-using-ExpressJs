const express = require('express');
const BookDetailsControllers = require('../libraryManagement/controller/bookDetails/BookDetailsController');
const BookDetailsRepo = require('../libraryManagement/repo/bookDetails/BookDetailsRepo');
const BookDetailsServices = require('../libraryManagement/services/bookDetails/BookDetailsServices');

//  declaring BookDetailsRepo file globally so that we can use it any where without importing
global.bookDetailsRepo = new BookDetailsRepo();
global.bookDetailsServices = new BookDetailsServices(global.bookDetailsRepo);

//  to call methods through this object
const bookDetailsControllers = new BookDetailsControllers();

const router = express.Router();

//  API calls for book details
router.get('/books',bookDetailsControllers.getBooks);
router.delete('/delBook/:id',bookDetailsControllers.deleteBooks);
router.post('/addBooks',bookDetailsControllers.addBooks);
router.put('/updateBook/:id',bookDetailsControllers.updateBook);
// router.put('/updateBooks',bookDetailsControllers.updateBooks);

module.exports = router;