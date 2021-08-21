const Course = require('../models/Course')
class CourseController {
    detail(req, res) {
        Course.findOne({ slug: req.params.slug }).
        then(course => {
            res.render('courses/detail', { course: course, isAuthenticated: req.loggedIn })
        }).
        catch(err => next(err))
    }
    create(req, res) {
            res.render('courses/create', {isAuthenticated: req.loggedIn})
        }
    edit(req, res, next) {
        Course.findOne({ _id: req.params.id }).
        then(course => {
            res.render('courses/update', { course: course, isAuthenticated: req.loggedIn })
        }).
        catch(err => next(err))
    }
    // Delete Course: /course/:id
    destroy(req, res, next) {
        console.log(req.params.id);
        Course.deleteOne({_id: req.params.id }).
        then(() => res.redirect('back')).
        catch(err => next(err))
    }
    store(req, res, next) {
        const course = new Course(req.body);
        course.save().
        then(() => res.redirect('/')).
        catch(err => next(err))
    }
    update(req, res, next) {
        Course.updateOne({_id: req.params.id}, req.body)
        .then(()=> res.redirect('/me/stored/course'))
        .catch(next)
    }

}

module.exports = new CourseController