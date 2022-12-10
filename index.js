const express = require('express');
const path = require ('path');
const app = express();
const exphbs = require('express-handlebars'); //https://github.com/express-handlebars/express-handlebars
const PORT = process.env.PORT || 3000;
const mainRoutes = require('./routs/main');
const addRoutes = require('./routs/add');
const coursesRoutes = require('./routs/courses');
const cardRoutes = require('./routs/card');

const hbs = exphbs.create ({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine);
app.set ('view engine', 'hbs');
app.set('views', 'views');

//router registration
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use('/', mainRoutes);
app.use('/add', addRoutes);
app.use('/courses', coursesRoutes);
app.use('/card', cardRoutes);

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`)
})