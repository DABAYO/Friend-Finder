// dependencies
const express = require("express");
const router = express.Router();
const path = require('path');

router.get('/survey', function (req, res) {
	res.sendFile(path.join(__dirname + '/../public/survey.html'));
});


router.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/../public/home.html'));
});

// 404 error 
router.use(function (req, res) {
	res.send("<h1> 404 page not found </h1>");
});

module.exports = router;