// dependencies
const express = require("express");
const router = express.Router();
const path = require('path');
const friendData = require('../data/friends.js');

let userInput = {
    name: "",
    photo: "",
    scores: []
}

var totalDifference = 0;


router.post("/userData", function (req, res) {

 

    for (let i in req.body) {
        if (i === "name"){
            userInput.name = req.body[i];

        } else if (i === "photo"){
            userInput.photo = req.body[i];

        }
        else{
            userInput.scores.push(parseInt(req.body[i]));

        }

    }

    res.redirect("/");
});

router.get('/friends', function (req, res) {
    res.json(userInput);
});



module.exports = router;