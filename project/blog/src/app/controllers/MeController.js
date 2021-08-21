const Course = require('../models/Course');
class NewsController {
    stored(req, res) {
        Course.find({}).
        then(courses => res.render('me/stored-course', {courses: courses, isAuthenticated: req.loggedIn})).
        catch(error => next(error))
    }
}

module.exports = new NewsController