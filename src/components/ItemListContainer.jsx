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
            <section class="py-5">
                <div class="container px-4 px-lg-5 mt-5">
                    <div id="lista" class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        <ItemList listProducts={listProducts}/>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}

export default ItemListContainer