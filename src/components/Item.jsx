import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ( {producto} ) => {
  return (
    <div className='Producto'>
      <img src={producto.imagen}/>
      <h2>{producto.nombre}</h2>
      <p>${producto.precio}</p>
      <p>{producto.descripcion}</p>
      <Link to={`/item/${producto.id}}`}> Mostrar producto </ Link>
    </div>
  )
}
