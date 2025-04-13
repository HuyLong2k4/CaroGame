class PlayWithFriendController {
    async index(req, res) {
        try {
            res.render('playWithFriend');
        } catch (err) {
            res.status(400).json({ error: 'Error' });
        }
    }
}

module.exports = new PlayWithFriendController();

