
var siteRouter = require('./site');
var playWithFriendRouter = require('./playWithFriend')
var PlayWithComputerRouter = require('./playWithComputer')


function routes(app) {
    app.use('/', siteRouter);
    app.use('/play', PlayWithComputerRouter);
    app.use('/play', playWithFriendRouter);
}

module.exports = routes;
