import React from "react"

const ItemListContainer = (props) => {
    const {titulo, greeting} =props
    return (
        
        <div>
            <p>{titulo}</p>
            <p>{greeting}</p>
        </div>
    )
}

export default ItemListContainer