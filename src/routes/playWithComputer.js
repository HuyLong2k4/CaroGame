var express = require('express');
var router = express.Router();
var playWithComputerController = require('../app/controllers/PlayWithComputerController')

router.get('/playWithComputer', playWithComputerController.index);

module.exports = router;