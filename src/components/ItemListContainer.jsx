import React, { useState, useEffect,} from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/productos.json';
import categorias from '../data/categorias.json'
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

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

useEffect(() => {
  pedirProductos()
  .then((res) => {
    if (categoryId) {
      setProductos(shuffleArray(res.filter((prod)=> prod.categoria.id === categoryId)))
    } else {
      setProductos(shuffleArray(res));
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
  );
};