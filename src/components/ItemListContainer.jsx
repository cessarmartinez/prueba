import React, {useEffect, useState} from "react"
import { customFetch } from "./customFetch"
import ItemList from './ItemList'
import productos  from "./productos"

const ItemListContainer = (props) => {
    const {titulo, greeting} =props

    const [listProducts, setListProducts]=useState([])

    useEffect(()=>{
        customFetch(productos)
        .then(data=> setListProducts(data))
    },[])
    
    console.log(listProducts)
    return (
        <>
        <div>
            <p>{titulo}</p>
            <p>{greeting}</p>
            <ItemList listProducts={listProducts}/>
        </div>
        </>
    )
}

export default ItemListContainer