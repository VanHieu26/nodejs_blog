class NewsController {
    // [GET/{id}] news/:slug
    details(req, res) {
        res.send('Details');
    }

    // [GET] / news
    index(req, res) {
        res.render('new');
    }
}

module.exports = new NewsController();
