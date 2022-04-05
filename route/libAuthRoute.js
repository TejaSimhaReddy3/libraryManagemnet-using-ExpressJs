const express = require('express');
const LibAuthController = require('../libraryManagement/controller/libAuthController/LibAuthController');
const LibAuthRepo = require('../libraryManagement/repo/libAuthRepo/LibAuthRepo');
const LibAuthServices = require('../libraryManagement/services/libAuthServices/LibAuthServices');

global.libAuthRepo = new LibAuthRepo();
global.libAuthServices = new LibAuthServices(libAuthRepo);

const libAuthController = new LibAuthController;

const router = express.Router();

router.get('/staff',libAuthController.getStaff);
router.post('/addStaff',libAuthController.post);
router.get('/login',libAuthController.login)

module.exports = router;