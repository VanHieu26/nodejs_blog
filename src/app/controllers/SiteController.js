const Course = require('../models/Course');
const { mutipleMongooseToObbject } = require('../../util/mongoose');

class SiteController {
    // [GET/{id}] news/:slug
    search(req, res) {
        res.render('search');
    }

    // [GET] / news
    home(req, res, next) {
        Course.findWithDeleted({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObbject(courses),
                });
            })
            .catch(next);
        //res.render('home');
    }
}

module.exports = new SiteController();
