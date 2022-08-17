const routes = require('express').Router()
const Controller = require('../controllers/controller')

routes.get('/', (Controller.home))
routes.get('/signIn', (Controller.signIn))
routes.get('/user', (Controller.user))
routes.get('/signUp', (Controller.signUp))
routes.post('/signUp', (Controller.submitSignUp))
routes.get('/user/course/:username', (Controller.course))
routes.get('/user/course/:username/:categoryId', (Controller.question))
routes.get('/score', (Controller.score))

module.exports = routes