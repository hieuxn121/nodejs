class NewsController {

    index(req, res) {
        res.render('news', {isAuthenticated: req.loggedIn})
    }
    show(req, res) {
        res.send('New Detail')
    }
}

module.exports = new NewsController