'use strict'
const Product = require('../models/product')

function getProduct (req,res) {
  let productoID = req.params.productID

  Product.findById(productoID, (err,product) => {
    if (err)  return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
    if (!product)   return res.status(404).send({message: 'Producto no Encontrado en la base de datos'})

  return  res.status(200).send({product})
  })
}

function getProducts (req,res) {
  Product.find({},(err,products) => {
if (err) {
  return res.status(500).send({message:`Error al consultar ${err}`})
}
if (!products) {
  return res.status(404).send({message: 'no Existen productos'})
}
return res.send(200,{products})

  })
}

function saveProduct(req,res){
  console.log('POST /api/product')


  let product = new Product()
  product.name = req.body.name
  product.picture = req.body.picture
  product.price = req.body.price
  product.category = req.body.category
  product.description = req.body.description

  product.save((err,productStored) => {
    if(err)res.status(500).send({ message: `Error al salvar en la base de datos ${err}`})
    res.status(200).send({producto: productStored})

    console.log(req.body);
  })
}

function updateProduct(req,res){
  let prodID = req.params.productID
  let update = req.body
  Product.findByIdAndUpdate(prodID, update, (err,productUpdate) =>{
    if (err) {
      res.status(500).send({message: `Erro al modificar el producto ${err}`})
    }
    res.status(200).send({product: productUpdate})
  })
}

function deleteProduct(req,res){
  let prodID = req.params.productID

  Product.findById(prodID, (err,product) =>{
    if (err) {
      res.status(500).send({message: `Erro al borar el producto ${err}`})
    }
    product.remove(err =>{
      if (err) {
        res.status(500).send({message: `Erro al borar el producto ${err}`})
      }
      res.status(200).send({message:'El producto ha sido eliminado'})
    })
  })
}

module.exports = {
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  saveProduct
}
