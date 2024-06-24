import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';

export const ItemDetail = ({producto, props}) => {

  const {Cart, agregarCarrito } = useContext(CartContext);

  const handleAgregar =() => {
    agregarCarrito(producto)
  }
  return (
    <div className="pag-producto">
      <div className="producto-info">
        <h1>{producto.nombre}</h1>
        <p className="producto-precio">${producto.precio.toFixed(2)}</p>
        <p className="producto-descripcion">{producto.descripcion}</p>
        <button onClick={handleAgregar}>🛒</button>
      </div>
      <div className="producto-imagen-wrapper">
        <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
      </div>
    </div>
  )
}
