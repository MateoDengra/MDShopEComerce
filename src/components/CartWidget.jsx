import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export const CartWidget = (props) => {

  const {calcularCantidad} = useContext(CartContext);

  return (
    <div className="CartWidget">
      <Link to="/Carrito">🛒{calcularCantidad()}</Link> 
    </div>  
  );
};

// 🛒1