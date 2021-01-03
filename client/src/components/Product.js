import React from 'react'
import { Card } from 'react-bootstrap'
import Ratings from './Ratings';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title>
            {' '}
            <strong>{product.name} </strong>
          </Card.Title>
        </a>
        <Card.Text as='div'className='my-3'>
           
            <Ratings value={product.rating} text={`${product.reviews} reviews`}/>
          
        </Card.Text>
        <Card.Text as='h3'>
          ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
