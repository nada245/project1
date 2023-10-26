import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Product from './Product';
function ProductDetails() {
    const api_url = "https://fakestoreapi.com/products";
    const [product, setProduct] = useState({})
    const params = useParams();
    useEffect(() => {
        fetch(`${api_url}/${params.productId}`).then((res) => res.json()).then((data) => setProduct(data))

    }, []);

    return (
        <Product product={product} showButton={false} />
    )
}

export default ProductDetails;