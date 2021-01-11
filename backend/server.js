const express = require('express')
const products = require('./data/products')


const app = express()
app.get('/', (req, res) => {
  res.send('api is running')
})

app.get('/products/api',(req,res)=>{
    res.json(products)
})

app.get('/products/api:id',(req,res)=>{
    const product=products.find(item=>item._id===req.params.id)
    res.json(product)
})

app.listen(5000, console.log('server running at port 5000'))
