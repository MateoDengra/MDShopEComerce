import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc, Timestamp } from "firebase/firestore"; 
import { db } from "../firebase/config";

export const Endbuy = () => {
  const { Cart, calcularTotal, vaciarCarrito } = useContext(CartContext);
  const { register, handleSubmit } = useForm();
  let [docId, setDocId] = useState("");

  const comprar = (data) => {
    console.log("Datos del comprador:", data); 
    const total = calcularTotal().toFixed(2);


    const pedido = {
      cliente: data,
      productos: Cart,
      total: calcularTotal(),
      fecha: new Date().toISOString() 
    };

    const pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
    const newId = `pedido-${pedidos.length + 1}`;
    pedidos.push({ id: newId, ...pedido });
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
  
    console.log("Pedido realizado:", pedido);
    setDocId("12345ABC"); 
    vaciarCarrito();
  };

  if (docId) {
    return (
      <>
      <div className="brief">
      <h1>Muchas gracias por tu compra</h1>
        <p>Para hacer el seguimiento de tu pedido, el identificador es este: {docId}</p>
        <img src="/images/check.png" alt="" />
      </div>
              </>
    );
  }

  return (
    <div className="checkout">
      <form onSubmit={handleSubmit(comprar)}>
        <input type="text" placeholder="Nombre" {...register("nombre")} />
        <input type="text" placeholder="Apellido" {...register("apellido")} />
        <input type="text" placeholder="DNI" {...register("dni")} />
        <input type="email" placeholder="Email" {...register("email")} />
        <input type="text" placeholder="Dirección" {...register("direccion")} />
        <input type="text" placeholder="Localidad" {...register("localidad")} />
        <select {...register("envio")}>
          <option value="envio">Envío</option>
          <option value="retiro">Retiro en puerta</option>
        </select>
        <button type="submit">Comprar</button>
      </form>
    </div>
  );
};
