import React from "react"
import productos from "./productos"

const Item = ({producto}) => {
    return (
        <>
        <div className="col mb-5">
            <div className="card h-100">
                <img className="card-img-top" src={producto.imagen} alt="${product.descripcion}" />
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{producto.name}</h5>
                            {producto.precio}
                        </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                            <button className="btn btn-outline-dark mt-auto " id="boton">Agregar
                            </button>
                        </div>
                    </div>
            </div>
        </div>
        </>
    )
}

export default Item