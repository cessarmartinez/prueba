import React from "react"
import productos from "./productos"

const Item = ({producto}) => {
    return (
        <div>{producto.name}</div>
    )
}

export default Item