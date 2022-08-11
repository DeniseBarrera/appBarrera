import React from 'react'

const Item = ({product}) => {
  return (
    <>
    <div>{product.product}</div>
    <img src={product.Image}/>
    <p>${product.price}</p>
    <button>Ver detalle</button>
    </>
  )
}

export default Item