import React from 'react'
import { customFetch } from '../assets/customFetch'
import { useState, useEffect } from 'react'
import { products } from '../assets/productos'
import { ItemCount } from './ItemCount'
import ItemList from './ItemList'

const ItemListContainer = ({ greeting }) => {

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        customFetch(products)
            .then(data => {
                setLoading(true)
                setListProducts(data)
            })
    }, [])



return (
    <>
        <div>Hola!!</div>
        {!loading && <spinner/>}
        {loading && <ItemList listProducts={listProducts} />}
    </>
)
}

export default ItemListContainer