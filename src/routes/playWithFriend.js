var express = require('express');
var router = express.Router();
var playWithFriendController = require('../app/controllers/PlayWithFriendController');

router.get('/playWithFriend', playWithFriendController.index);

module.exports = router;
