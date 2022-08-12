import React, { useEffect, useState } from 'react'
import { products } from '../assets/productos'
import { customFetch } from '../assets/customFetch'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [listProduct, setListProduct] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        customFetch(products)
        .then(res => {
            setLoading(false)
            setListProduct(res.find(item => item.id === 1))})
    },[])
return (
    <>
    {!loading ? <ItemDetail listProduct={listProduct}/> : <p>Cargando..</p>}
    </>
)
}

export default ItemDetailContainer