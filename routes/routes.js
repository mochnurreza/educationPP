const routes = require('express').Router()
const Controller = require('./../controllers/index')

routes.get('/home',Controller.home)
routes.get('/signIn',Controller.signIn)
routes.post('/signIn',Controller.signInPost)
routes.get('/signUp',Controller.signUp)
routes.post('/signUp',Controller.signUpPost)
routes.get('/user',Controller.user)
routes.get('/user/score',Controller.score)
routes.get('/admin',Controller.admin)
routes.get('/admin/add',Controller.add)
routes.post('/admin/add',Controller.addSubmit)
routes.get('/admin/edit/:id',Controller.edit)
routes.post('/admin/edit/:id',Controller.editSubmit)
routes.post('/admin/delete/:id',Controller.delete)

module.exports = routes