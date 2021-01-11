import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import Ratings from '../components/Ratings'
//import products from '../products'

const ProductPage = ({ match }) => {
  const [product,setProduct]= useState({})
  
  useEffect(()=>{
    const fetchProduct=async ()=>{
      const {data}=await axios.get(`/products/api${match.params.id}`)
      setProduct(data)
    }
    fetchProduct()
  },[])

  //const product = products.find((p) => p._id === match.params.id) //match get id from url

  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={5}>
          <Image
            src={product.image}
            alt={product.name}
            style={{ height: '400px' }}
          />
        </Col>

        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item variant='dark'>
              <h1>{product.name}</h1>
            </ListGroup.Item>
            <ListGroup.Item>
              <Ratings
                value={product.rating}
                text={`${product.reviews} Reviews`}
              ></Ratings>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Price: ${product.price}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Description: {product.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>Price</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.stock>0?'In stock':'out of stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className='btn-block' type='button' disabled={product.stock===0}>
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductPage
