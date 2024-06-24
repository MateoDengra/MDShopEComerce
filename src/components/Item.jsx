import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export const Item = ( {producto} ) => {

const {agregarCarrito} = useContext(CartContext); 
const handleAgregar =() => {
  agregarCarrito(producto)
}

  return (
    <div className='Producto'>
      <img src={producto.imagen}/>
      <h2>{producto.nombre}</h2>
      <p>${producto.precio}</p>
      <p>{producto.descripcion}</p>
      <button onClick={handleAgregar}>🛒</button>
      <br />
      <Link to={`/item/${producto.id}}`}> Mostrar producto </ Link>
    </div>
  )
}
