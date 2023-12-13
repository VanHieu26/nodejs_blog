const Course = require('../models/Course');
const { mutipleMongooseToObbject, mongooseToObject } = require('../../util/mongoose');


class MeController{

    storedCourse(req, res, next){
        Course.find()
            .then((courses) => res.render('me/index', {courses: mutipleMongooseToObbject(courses)}))
            .catch(next);

    }

    trashCourse(req, res, next){
        Course.findDeleted()
            .then((courses) => res.render('me/trash', {courses: mutipleMongooseToObbject(courses)}))
            .catch(next);
    }

}


module.exports = new MeController();