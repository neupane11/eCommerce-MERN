import express from 'express'
//import products from './data/products.js'
import Product from './models/productModel.js'
import asyncHandler from 'express-async-handler'

//config
import connectDB from './connections/db.js'
import dotenv from 'dotenv'
//import products from './data/products'
dotenv.config()

connectDB()

const app = express()
app.get('/', (req, res) => {
  res.send('api is running')
})

//product routes

//get req to products api
app.get(
  '/products/api',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
)

//get req to individual product
app.get(
  '/products/api:id',
  asyncHandler(async (req, res) => {
    //const product = products.find((item) => item._id === req.params.id)
    const product = await Product.findById(req.params.id)
    if (product) {
      res.json(product)
    } else {
      res.status(404).json({ message: 'product not found' })
    }
  })
)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server running on Port ${PORT}`))
