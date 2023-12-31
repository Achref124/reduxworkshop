import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductList = () => {
    const Products=useSelector((state)=>state.listReducer.ListProduct)
    console.log(Products)
  return (
    <div>
      <Link to={"/AddProduct"} ><Button>Add New Product</Button></Link>
        {Products.map(Prod=><Product Prod={Prod} key={Prod.id}/>)}
    </div>
  )
}

export default ProductList