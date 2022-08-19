const { Answer, Quiz, Score, User } = require('./../models')

class Controller {
    static home(req, res) {
        res.render('home')
    }
    static signIn(req, res) {
        res.render('signIn')
    }
    static signInPost(req, res) {
        const { email, password , role} = req.body
        User.findOne({ where: { email } })
            .then(user => {
                if (user) {
                    const isValidPassword = bcrypt.compareSync(password, user.password)
                    if (isValidPassword) {
                        if (role ==='user') {
                            return res.redirect('/user')
                        }
                        if (role === "admin") {
                            return res.redirect('/admin')
                        }
                    }
                    else {
                        const error = 'invalid email/password'
                        return res.redirect(`/signIn?errorr+${error}`)
                    }
                }
                else {
                    const error = 'invalid email/password'
                    return res.redirect(`/signIn?errorr+${error}`)
                }
            })
            .catch(err => {
                res.send(err)
            })
    }
    static signUp(req, res) {
        res.render('signUp')
    }
    static signUpPost(req, res) {
        User.create({
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        })
            .then(result => {
                res.redirect(`/signIn`)
            })
            .catch(err => {
                res.send(err)
            })
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
            AnswerId: req.body.AnswerId
        })
            .then(result => {
                res.redirect ('/admin')
                // res.send(result)
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
        Quiz.destroy(
            { where: { id: req.params.id } })
        Answer.destroy(
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