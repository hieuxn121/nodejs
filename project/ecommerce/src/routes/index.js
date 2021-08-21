const productRoute = require('./product')
const categoryRoute = require('./category')
const authRoute = require('./auth');
function route(app) {
    app.use('/login', authRoute);
    app.use('/categories', categoryRoute);
    app.use('/products', productRoute);
    app.use('/', (req,res,next) => {
        res.status(200).json({
            message: 'Welcome to Project with Nodejs Express and MongoDB'
        });
    })
    app.use((req,res,next) => {
        res.send('Not Found');
    })
}
module.exports = route;