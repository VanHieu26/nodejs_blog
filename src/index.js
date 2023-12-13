const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');
const methodOverride = require('method-override');
const port = 3000;
const app = express();
app.use(methodOverride('_method'));
const route = require('./routes');

const db = require('./config/db');

// connect db
db.connect();
// static file
app.use(express.static(path.join(__dirname, 'public')));

// middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

// Template engine setup
app.engine(
    'hbs',
    exphbs.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

console.log(path.join(__dirname, 'views'));

// route init
route(app);

app.listen(port, () => {
    console.log(`App listening on port https:/localhost:${port}`);
});
