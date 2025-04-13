class PlayWithComputerController {
    async index(req, res) {
        try {
            res.render('playWithComputer');
        } catch (err) {
            res.status(400).json({ error: 'error' });
        }
    }
}

module.exports = new PlayWithComputerController();