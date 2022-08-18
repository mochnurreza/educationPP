const express = require ('express')
const app = express()
const port = 3005
const routes = require ('./routes/routes')

app.set ('view engine', 'ejs')
app.use (express.urlencoded({extended:true}))
app.use (routes)
// app.use (session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false }
// }))

app.listen(port, () => {
    console.log (`listening ${port}`)
})

