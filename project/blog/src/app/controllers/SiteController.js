const Course = require('../models/Course')
class SiteController {
    index(req, res, next) {
        console.log(req.loggedIn)
        Course.find({}).
        then(courses => res.render('home', { data: courses, isAuthenticated: req.loggedIn })).
        catch(error => next(error))
    }
}
module.exports = new SiteController