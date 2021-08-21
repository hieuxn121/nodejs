const newsRouter = require('./news')
const siteRouter = require('./site')
const courseRouter = require('./course')
const meRouter = require('./me');
const authRouter = require('./auth')
function route(app) {
    app.use('/course', courseRouter)
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/', siteRouter)
    app.use('/login', authRouter)
}
module.exports = route