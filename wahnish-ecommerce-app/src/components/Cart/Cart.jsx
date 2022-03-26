import { useCartContext } from "../../context/cartContext"
import { Link } from "react-router-dom";


const Cart = () => {
    const { cartList, vaciarCarrito, finalizarCompra, removeFromCart } = useCartContext();
    let importeTotal = 0;
    cartList.forEach(calculateTotalPrice);
    function calculateTotalPrice(element) {
        importeTotal = importeTotal + (element.precio * element.cantidad);
    }

    const hayItems = (cartList.length > 0) ? true : false;

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
                                        <th id="toppRow00">Identificacion</th>
                                        <th >Categoria</th>
                                        <th id="topRow01">Clase</th>
                                        <th id="topRow02">Descripcion</th>
                                        <th id="topRow03">Precio</th>
                                        <th id="topRow04">Cantidad</th>
                                        <th id="topRow06">T.Parcial</th>
                                        <th>Eliminar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartList.map(item => <tr key={item.id + item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.categoria}</td>
                                        <td>{item.clase}</td>
                                        <td>{item.descripcion}</td>
                                        <td>{item.precio}</td>
                                        <td>{item.cantidad}</td>
                                        <td>{item.precio * item.cantidad}</td>
                                        <td><button className="roundButton" onClick={() => removeFromCart(item.id)}><i className="far fa-dot-circle"></i></button></td>
                                    </tr>)}
                                </tbody>
                            </table>
                            <div className="m-3">
                                <h3>Importe Total </h3>
                                <h3>{importeTotal}</h3>
                            </div>
                        </div>
                        <div>
                            {/* <label className="btn-lg bg-warning m-3">Seleccionar Item a eliminar</label>
                                <select id="mySelect" className="md-3 asBody" onChange={(e) => eliminarItem(e)} >
                                <option>Opciones</option>
                                {itemId.map(item => <option key={item.id + item.extra}>
                                {item.id}
                            </option>)}
                            </select>*/}
                            <button className="btn btn-danger btn-lg button m-3 " onClick={vaciarCarrito}>Cancelar la Compra</button>
                            <button className="btn btn-success btn-lg button m-3 " onClick={finalizarCompra}>Finalizar la Compra</button>
                        </div>
                    </div>
                    :
                    <Link to={`/`}>
                        <div className="asBody m-5">
                            <h2 className="centrar">El pedido esta vacio</h2>
                        </div>
                    </Link>
            }
        </>
    )
}

export default Cart
