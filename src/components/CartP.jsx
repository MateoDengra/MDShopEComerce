import React, { useContext,} from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';


const CartP = () => {

  const { Cart, calcularTotal, vaciarCarrito, eliminarProducto } = useContext (CartContext);

  const handleVaciar = () =>{
    vaciarCarrito();
  }
  return (
    <div className="cart-container">
    <h1>Carrito 🛒:</h1>
    <div className="cart-items">
      {Cart.map((prod) => (
        <div key={prod.id} className="cart-item">
          <img src={prod.imagen} alt={prod.nombre} className="cart-item-image" />
          <div className="cart-item-details">
            <h2>{prod.nombre}</h2>
            <div>
                <p>Precio: ${prod.precio.toFixed(2)}</p>
                <p>Cantidad: {prod.cantidad}</p>
                <button onClick={() => eliminarProducto(prod)}>❌</button>
            </div>
          </div>
        </div>
      ))}
      {
        Cart.length > 0 ?
        <>
        <div className="totals">
        <h3>Total: ${calcularTotal()}</h3>
        <button onClick={handleVaciar}>❌Vaciar carrito❌ </button>
        <button ><Link to="/Finalizar-compra">Comprar🤑</Link> </button>

        </div>
        </> :
        <h2>Carrito vacio, agregá para comprar nuestros <Link to="/Productos">productos 😉</Link></h2>
      }
    </div>
  </div>
  );
};

export default CartP;