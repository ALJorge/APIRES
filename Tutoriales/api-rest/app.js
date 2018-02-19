'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const api = require('./routes')
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.use('/api', api)

/*
app.get('/api/product/',  productControlles.getProducts())
app.get('/api/product/:productID', productControlles.getProduct())
app.post('/api/product/', productControlles.saveProduct())
app.put('/api/product/:productID', productControlles.updateProduct())
app.delete('/api/product/:productID', productControlles.deleteProduct())
*/
module.exports = app
