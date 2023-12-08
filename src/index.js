const express = require('express');
const exphbs  = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');
const port = 3000
const app = express();

// static file
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Template engine setup
app.engine('hbs',exphbs.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

console.log( path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    res.render('home');
});

app.get('/new',(req, res) =>{
    res.render('new');
} )

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
