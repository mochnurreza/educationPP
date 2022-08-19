const express = require ('express')
const bodyParser = require ('body-parser')
// const cookieParser = require ('cookie-parser')
const session = require('express-session');
const app = express()
const port = 3005
const routes = require ('./routes/routes')


app.set ('view engine', 'ejs')
app.use (bodyParser.json())
app.use (bodyParser.urlencoded({ extended: true }))
// app.use (cookieParser())
app.use (session({
    secret: 'supersecret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}))
app.use (routes)

app.listen(port, () => {
    console.log (`App running on port ${port}`)
})