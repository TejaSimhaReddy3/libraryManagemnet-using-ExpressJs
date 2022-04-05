const express = require('express');
const bookDetailsRoute = require('./bookDetailsRoute');
const bookIssuedRoute = require('./bookIssuedRoute');
const bookReturnedRoute = require('./bookReturnedRoute');
const staffDetailsRoute = require('./staffDetailsRoute');
const publisherDetailsRoute = require('./publisherDetailsRoute');
const readerDetailsRoute = require('./readerDetailsRoute');
const libAuthRoute = require('./libAuthRoute')
const libAuthMiddleware = require('../middlewares/authenticate')

const router = express.Router();

router.use('/bookDetails',bookDetailsRoute);
router.use('/bookIssued',bookIssuedRoute);
router.use('/bookReturned',bookReturnedRoute);
router.use('/staffDetails',staffDetailsRoute);
router.use('/publisherDetails',publisherDetailsRoute);
router.use('/readerDetails',readerDetailsRoute);
router.use('/libauth',libAuthMiddleware,libAuthRoute);


module.exports = router;