import React, { useEffect, useState } from 'react'
import ProductList from './ProductList';

function ProductPage() {

    const [products, setProducts] = useState([])

    useEffect(() => {
      fetch('https://northwind.vercel.app/api/products')
      .then(res => res.json())
      .then((data) => {
          setProducts(data);
      })
    }, [])
    
  return (
    <>
        <ProductList products={products}></ProductList>
    </>
  )
}

export default ProductPage