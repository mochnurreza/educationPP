const { Answer, Quiz, Score, User } = require('./../models')

class Controller {
    static home(req, res) {
        res.render('home')
    }
    static signIn(req, res) {
        res.render('signIn')
    }
    static signUp(req, res) {
        res.render('signUp')
    }
    static user(req, res) {
        Quiz.findAll()
            .then(result => {
                res.render('user', { detail: result })
            })
            .catch(err => {
                res.send(err)
            })
    }
    static score(req, res) {
        // Score.findAll()
        //     .then(result => {
        //         res.render('score', {detail:result})
        //     })
        //     .catch(err => {
        //         res.send(err)
        //     })
    }
    static admin(req, res) {
        Quiz.findAll({ include: Answer })
            .then(result => {
                res.render('admin', { detail: result })
                // res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }
    static add(req, res) {
        res.render('add')
    }
    static addSubmit(req, res) {
        Answer.create({
            answer: req.body.answer
        })
        Quiz.create({
            question: req.body.question,
            AnswerId: Answer.id
        })
            .then(result => {
                // res.redirect ('/admin')
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }
    static edit(req, res) {
        Quiz.findOne(
            { where: { id: req.params.id }, include: Answer })
            .then(result => {
                res.render('edit', { detail: result })
                // res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }
    static editSubmit(req, res) {
        Answer.update({
            answer: req.body.answer
        },
            { where: { id: req.params.id } })
        Quiz.update({
            question: req.body.question
        },
            { where: { id: req.params.id } })
            .then(result => {
                res.redirect('/admin')
                // res.send (result)
            })
            .catch(err => {
                res.send(err)
            })
    }
    static delete(req, res) {
        Answer.destroy(
            { where: { id: req.params.id } })
        Quiz.destroy(
            { where: { id: req.params.id } })
            .then(result => {
                res.redirect('/admin')
            })
            .catch(err => {
                res.send(err)
            })

    }
}

module.exports = Controller