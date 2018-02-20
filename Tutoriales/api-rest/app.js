'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const app = express()

const api = require('./routes')
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.engine('.hbs',hbs({
  defaultLayout: 'default',
  extname: '.hbs'
}))

app.set('view engine','hbs')

app.use('/api', api)
app.get('/login',(req,res) => {
  res.render('login')
})
/*
app.get('/api/product/',  productControlles.getProducts())
app.get('/api/product/:productID', productControlles.getProduct())
app.post('/api/product/', productControlles.saveProduct())
app.put('/api/product/:productID', productControlles.updateProduct())
app.delete('/api/product/:productID', productControlles.deleteProduct())
*/
module.exports = app
