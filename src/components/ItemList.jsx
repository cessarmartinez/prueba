import React from 'react'
import Item from './Item'

const ItemList = ({listProducts}) =>{
    return(
        <>
        {listProducts.map(product =><Item 
        key={product.name}
        producto={product}/>)}
        </>
    )
}

export default ItemList