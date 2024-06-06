import React, { useState, useEffect,} from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/productos.json';
import { Item } from './Item';

export const ItemListContainer = () => {

let { categoryId } = useParams ();
console.log (categoryId);

  let [productos, setProductos] = useState([]);

const pedirProductos = () => {  
  return new Promise ((resolve) => {
    resolve(data)
  })
}

useEffect(() => {
  pedirProductos()
  .then((res) => {
    if (categoryId) {
      setProductos(res.filter((prod)=> prod.categoria.id === categoryId))
    } else {
      setProductos(res);
    }
  });
}, [categoryId]);
 
  return (
    <div className="ItemListContainer">
  {productos.length > 0 ? 
  productos.map(producto =>{ 
    return <Item key={producto.id} producto={producto}/>
  })
    : "No hay productos"
}  
  </div>
  )
}