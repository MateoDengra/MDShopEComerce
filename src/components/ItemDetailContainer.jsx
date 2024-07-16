import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
  // import data from "../data/productos.json"
import { ItemDetail } from './ItemDetail';
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/config'

export const ItemDetailContainer = () => {

    let { itemId} = useParams();
    let [producto, setProducto] = useState(undefined);
    
    useEffect(() => {
// setProducto(data.find((prod) => prod.id === parseInt(itemId) ));
const docRef = doc (db, "productos", itemId); 
getDoc(docRef)
.then(res =>{
setProducto(
  {...res.data(), id: doc.id});  
    })
}, [itemId]);

  return (
    <div>{producto ? <ItemDetail producto={producto} /> : "Cargando..."}</div>
  )
}

export default ItemDetailContainer