import { useCartContext } from "../../context/cartContext"
import { Link } from "react-router-dom";
import React, { useState } from "react";

import FormModal from "../../components/modal/FormModal.jsx";


const Cart = () => {
    const { cartList, emptyCart, updateQuantity, removeFromCart, sumaTotal } = useCartContext();
    const [isOpen, setIsOpen] = useState(false);
    const [isThereId, setIsThereId] = useState(false);
    const [orderId, setOrderId] = useState("");
    let importeTotal = sumaTotal();

    const hayItems = (cartList.length > 0) ? true : false;

    function emptying() {
        emptyCart()
        localStorage.removeItem("pedido")
    }

    function changeQuantity(item) {
        let nuevaCantidad = prompt("Nueva cantidad");
        item.cantidad = nuevaCantidad;
        updateQuantity(item)
    }

    return (
        <>
            {
                hayItems ?
                    <div>
                        <div>
                            <div>
                                <h3>Contenido del Pedido</h3>
                            </div>
                            <table id="items-table" className="table table-sm table-bordered table-striped">
                                <thead>
                                    <tr id="topRow">
                                        <th >Categoria</th>
                                        <th id="topRow01">Clase</th>
                                        <th id="topRow02">Descripcion</th>
                                        <th id="topRow03">Precio</th>
                                        <th id="topRow04">Cantidad</th>
                                        <th id="topRow05">T.Parcial</th>
                                        <th>Eliminar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartList.map(item => <tr key={item.id + item.id}>
                                        <td>{item.categoria}</td>
                                        <td>{item.clase}</td>
                                        <td>{item.descripcion}</td>
                                        <td>{item.precio}</td>
                                        <td>{item.cantidad}<i className="fas fa-pen-nib green" onClick={() => changeQuantity(item)}></i></td>
                                        <td>{item.precio * item.cantidad}</td>
                                        <td><button className="roundButton" onClick={() => removeFromCart(item.id)}><i className="fas fa-trash-alt brick"></i></button></td>
                                    </tr>)}
                                </tbody>
                            </table>
                            <div className="m-3">
                                <h3>Importe Total {importeTotal} </h3>
                            </div>
                        </div>
                        <>
                            {
                                !isOpen ?
                                <div>
                                    <Link to={`/`}>
                                        <button className="btn btn-info btn-lg button m-3" style={{ width: 200 }}>Continuar compra</button>
                                    </Link>

                                    <button className="btn btn-danger btn-lg button m-3 " onClick={emptying}>Cancelar la Compra</button>
                                    <button className="btn btn-success btn-lg button m-3 " onClick={() => setIsOpen(true)}>Finalizar la Compra</button>
                                </div>
                                :
                                <FormModal setIsOpen={setIsOpen} setIsThereId={setIsThereId} setOrderId ={setOrderId} />
                            }
                        </>
                    </div>
                    :
                    <>
                        <div className="asBody m-5">
                            <h3 className="center">El pedido esta vacio</h3>
                        </div>
                        <>
                        {
                            isThereId?
                            <div className="asBody">
                                <h3 className="center"><i className="fas fa-check-circle"></i> Su orden Nro {orderId} ha sido generada con exito</h3>
                            </div>
                            :
                            <></>
                        }
                        </>
                        <Link to={`/`}>
                            <div className="center">
                                <button className="btn btn-info btn-lg button m-5" style={{ width: 200 }}>Comprar</button>
                            </div>
                        </Link>
                    </>
            }
        </>
    )
}

export default Cart
