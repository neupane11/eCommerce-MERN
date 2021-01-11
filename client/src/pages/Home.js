import React from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
//import products from '../products'
import Product from '../components/Product'

const Home = () => {
  //fetching data from backend
  const [products,setProducts]=useState([])

  useEffect(()=>{
    const fetchProducts=async ()=>{
      const {data}=await axios.get('/products/api')
      setProducts(data)
    }
    fetchProducts()
  },[])

  return (
    <div className='py-5'>
      <h2>Our products</h2>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Home
