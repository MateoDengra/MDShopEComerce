import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/config";

export const Endbuy = () => {

    const { Cart, calcularTotal, vaciarCarrito} = useContext(CartContext);
    const { register, handleSubmit } = useForm();
    let [docId, setDocId] = useState("");

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: Cart,
            total: calcularTotal(),
            fecha: Timestamp.now()
        }
        
        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
             .then((doc) => {
                 setDocId(doc.id);
                 vaciarCarrito();
             })
    }

    if (docId) {
         return (
             <>
                 <h1>Muchas gracias por tu compra</h1>
                <p>Para hacer el seguimiento de tu pedido, el identificador es este: {docId}</p>
             </>
         )
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
