import express from 'express'
import products from './data/products.js'

//config
import connectDB from './connections/db.js'
import dotenv from 'dotenv'
dotenv.config()

connectDB()

const app = express()
app.get('/', (req, res) => {
  res.send('api is running')
})

app.get('/products/api', (req, res) => {
  res.json(products)
})

app.get('/products/api:id', (req, res) => {
  const product = products.find((item) => item._id === req.params.id)
  res.json(product)
})
const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server running on Port ${PORT}`))
