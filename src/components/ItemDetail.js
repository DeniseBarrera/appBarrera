import React from 'react'


const ItemDetail = ({listProduct}) => {
    console.log(listProduct)
  return (
    <div>{listProduct.product}</div>
  )
}

export default ItemDetail