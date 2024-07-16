import React, { useState, useEffect,} from 'react';
import { useParams } from 'react-router-dom';
// import data from '../data/productos.json';
// import categorias from '../data/categorias.json'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config'
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
  
const productosRef = collection(db, "productos");
const q = categoryId ? query(productosRef, where("categoria.id", "==", categoryId)) : productosRef;

getDocs(q)
  .then((res) => { 
    setProductos(
      res.docs.map((doc) => {
        return {...doc.data(), id: doc.id }
      })
    )
  })
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