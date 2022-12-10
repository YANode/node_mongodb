const {Router} = require('express'); //var express = require('express');
const router = Router();            //var router = express.Router();

const Course = require('../models/course');//connect the "course.js" course creation model

// content download by link
router.get('/', async (req, res) => {


    //to retrieve data read from getAll()
    const courses = await Course.getAll();

    //template code output
    res.render('courses', {
        title: 'courses', // seo-title the tab
        isCourses: true, // active link to the page navbar.hbs
        courses  //object to display on the page
    });
})


//loading the contents of the 'edit' page by id
router.get('/:id/edit', async (req, res) => {
    if (!req.query.allow) {
        return res.redirect('/')
    }

    //retrieve data from getById() by id
    const course = await Course.getById(req.params.id)

   //edit page output
    res.render('course-edit', {
        title: `Edit ${course.title}`,
        course
    })
})


// сhanged the data in the server database
router.post('/edit', async (req, res) => {
    await Course.update(req.body)
    return res.redirect('/courses')
})




//content 'course' page download by id
router.get('/:id', async (req, res) => {
    const course = await Course.getById(req.params.id);//the place where the identifier is stored
    res.render('course', {
        layout: 'empty',
        title: `Course ${course.title}`,//seo-title the tab
        course//object to display on the page
    })
})

module.exports = router;
