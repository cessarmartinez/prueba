import React, {useState} from 'react'

const ItemCount = () => {
    const [contador, setContador] = useState(1)

    const increase = () => {
        setContador (contador + 1)
    }
    const decrease = () => {
        setContador (contador - 1)
    }

    return (
        <div>

            <button onClick={increase}> + </button>
            <button onClick={decrease}> - </button>
            <h1>{contador}</h1>

        </div>
    )
}

export default ItemCount