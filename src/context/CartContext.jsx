import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [Cart, setCart] = useState([]);

  const agregarCarrito = (producto) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === producto.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      } else {
        return [...prevCart, { ...producto, cantidad: 1 }];
      }
    });
  };

  const calcularCantidad = () => {
    return Cart.length;
  };

  const calcularTotal = () => {
    return Cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  };

  const vaciarCarrito = () => {
    setCart([]);
  };

  const eliminarProducto = (producto) => {
    const productoEncontrado = Cart.find(prod => prod.id === producto.id);
    const indice = Cart.indexOf(productoEncontrado);

    setCart(Cart.filter(prod => prod.id !== producto.id));
  }


  
  return (
    <CartContext.Provider value={{ Cart, agregarCarrito, calcularCantidad, calcularTotal, vaciarCarrito, eliminarProducto }}>
      {children}
    </CartContext.Provider>
  );
};
