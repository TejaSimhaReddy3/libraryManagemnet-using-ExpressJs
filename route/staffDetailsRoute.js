const express = require('express');

const StaffDetailsController = require("../libraryManagement/controller/staffDetails/StaffDetailsController");
const StaffDetailsRepo = require("../libraryManagement/repo/staffDetails/StaffDetailsRepo");
const StaffDetailsServices = require("../libraryManagement/services/staffDetails/StaffDetailsServices");

global.staffDetailsRepo = new StaffDetailsRepo();
global.staffDetailsServices = new StaffDetailsServices(global.staffDetailsRepo);

const staffDetailsController = new StaffDetailsController();

const router = express.Router();

router.get('/get',staffDetailsController.get);
router.post('/addStaff',staffDetailsController.post);
router.put('/updateStaff/:id',staffDetailsController.update);
router.delete('/removeStaff/:id',staffDetailsController.delete);

module.exports = router;