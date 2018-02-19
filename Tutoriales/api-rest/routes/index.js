'use strict'

const express = require('express')
const productControlles = require('../controllers/product')
const auth = require('../middlewares/auth')
const api =  express.Router()
api.get('/product/',  productControlles.getProducts)
api.get('/product/:productID', productControlles.getProduct)
api.post('/product/', productControlles.saveProduct)
api.put('/product/:productID', productControlles.updateProduct)
api.delete('/product/:productID', productControlles.deleteProduct)
api.get('/private', auth.isAuth ,function (req,res){
  res.status(200).send({message: ' Tienes Acces'})
})
module.exports = api
