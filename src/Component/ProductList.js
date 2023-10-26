import React, { useEffect, useState } from 'react'
import Product from './Product'

function ProductList() {
    const api_url = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([])
    const getProduct = () => {
        fetch(api_url).then((res) => res.json()).then((data) => setProducts(data))
    }
    const getCategories = () => {
        fetch(`${api_url}/categories`).then((res) => res.json()).then((data) => setCategories(data))
    }
    const getProductInCategory = (catName) => {
        fetch(`${api_url}/category/${catName}`)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    };
    useEffect(() => {
        getProduct();
        getCategories();
    
    }, [])
    return (
        <>
            <h1 className='text-center p-3'>Our Products</h1>
            <div className='container'>

                <button onclick={() => { getProduct() }} className='btn btn-info'>All</button>

                {categories.map((cat) => {
                    return (<button key={cat} onClick={() => { getProductInCategory(cat) }} className='btn btn-info'>{cat}</button>
                    );



                })
                }
                <div className='row'>
                    {products.map((product) => {
                        return (
                            <div className='col-3' key={product.id}>
                                <Product product={product} showButton={true} />
                            </div>
                        )
                    })}

                </div>
            </div>

        </>
    )
}

export default ProductList