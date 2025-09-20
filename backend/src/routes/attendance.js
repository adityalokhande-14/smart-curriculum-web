const express = require('express');
const router = express.Router();
const { markAttendance, getLiveAttendance } = require('../controllers/attendanceController');

router.post('/mark', markAttendance);
router.get('/live', getLiveAttendance);

module.exports = router;