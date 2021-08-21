const express = require('express');
const app = express();
const port = 3009;
const path = require('path');
const morgan = require('morgan')
const route = require('./routes')
const db = require('./config/db');
var methodOverride = require('method-override')
// Connect to DB
db.connect();
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true,
}))

app.use(methodOverride('_method'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'resources', 'views'))

// Route init
route(app)

app.listen(port)