'use strict'

const express = require('express')
const productControlles = require('../controllers/product')
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const api =  express.Router()
api.get('/product/',  auth, productControlles.getProducts)
api.get('/product/:productID', productControlles.getProduct)
api.post('/product/', auth, productControlles.saveProduct)
api.put('/product/:productID', auth, productControlles.updateProduct)
api.delete('/product/:productID', auth, productControlles.deleteProduct)
api.post('/signUp',userCtrl.signUp)
api.post('/signIn',userCtrl.singIn)
api.get('/private', auth ,function (req,res){
  res.status(200).send({message: ' Tienes Acces'})
})
module.exports = api
