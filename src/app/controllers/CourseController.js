const Course = require('../models/Course');
const { mutipleMongooseToObbject, mongooseToObject } = require('../../util/mongoose');

class CourseController {
    index(req, res, next) {
        Course.find({})
            .then((course) => {
                res.render('courses/index', {
                    courses: mutipleMongooseToObbject(course),
                });
            })
            .catch(next);
        
    }

    // [GET] course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => res.render('courses/show', mongooseToObject(course)))
            .catch(next);
    }

    // [GET] course/create
    create(req, res, next) {
        res.render('courses/create');
    }


    // [GET] course/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
         .then((course) => res.render('courses/edit', mongooseToObject(course)))
         .catch(next);
    }


    // [PUT] course/:id
    update(req, res, next){
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    // [POST] course/store
    store(req, res, next) {
        // res.json(req.body);
        const course = new Course(req.body);
        course.save()
            .then(() => res.redirect('/'))
            .catch(next)
        
        
    }

    // [DELETE] course/:id
    destroy(req, res, next){
        Course.delete({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
        
    }   

    // [PATCH] course/:id/restore
    restore(req, res, next){
        Course.restore({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

    force(req, res, next){
        Course.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new CourseController();
