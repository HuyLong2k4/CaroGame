class SiteController {
    async index(req, res) {
        try {
            res.render('news');
        } catch (err) {
            res.status(400).json({ error: 'Error' });
        }
    }
}

module.exports = new SiteController();
