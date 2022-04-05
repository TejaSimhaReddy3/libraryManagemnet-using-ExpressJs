const express = require('express');

const PublisherDetailsControllers = require('../libraryManagement/controller/publisherDetails/PublisherDetailsController');
const PublisherDetailsRepo = require('../libraryManagement/repo/publisherDetails/PublisherDetailsRepo');
const PublisherDetailsServices = require('../libraryManagement/services/publisherDetails/PublisherDetailsServices');

global.publisherDetailsRepo = new PublisherDetailsRepo();
global.publisherDetailsServices = new PublisherDetailsServices(publisherDetailsRepo);

const publisherDetailsControllers = new PublisherDetailsControllers();

const router = express.Router();

router.get('/get',publisherDetailsControllers.get);
router.post('/addPublisher',publisherDetailsControllers.post);
router.put('/updatePublisher/:id',publisherDetailsControllers.put);

module.exports = router;