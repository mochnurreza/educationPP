const { options } = require("../routes")
const { Category, Question, User } = require("./../models")

class Controller {
    static home(req, res) {
        res.render('home')
    }
    static signIn(req, res) {
        res.render('signIn')
    }
    static user(req, res) {
        res.render('user')
    }
    static signUp(req, res) {
        res.render('signUp')
    }
    static submitSignUp(req, res) {
        User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
        })
            .then(result => {
                res.redirect(`/user/course/${req.body.username}`)
            })
            .catch(err => {
                res.send(err)
            })
    }
    static course(req, res) {
        User.findAll({
            where: {
                username: req.params.username
            }, include: Category
        })
            .then(result => {
                res.render('course', { detail: result })
                // res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }
    static question(req, res) {

    }
    static score(req, res) {
        // const category = req.query.category
        // const username = req.query.username
        // const score = req.query.score
        // if (category) {
        //     options.order = [['category', 'ASC']]
        // }
        // if (username) {
        //     options.order = [['username', 'ASC']]
        // }
        // if (score) {
        //     options.order = [['score', 'ASC']]
        // }
        Category.findAll({ include: User }, options)
            .then(result => {
                res.render('score', { detail: result })
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = Controller