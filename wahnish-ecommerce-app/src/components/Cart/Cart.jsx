import { useCartContext } from "../../context/cartContext"

function Cart() {
    const { cartList, vaciarCarrito } = useCartContext();
    return (
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
                            <td>{item.precio * item.cantidad }</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
            <div>
                <button className="btn btn-primary btn-lg button m-3 " onClick={vaciarCarrito}>Vaciar Carrito</button>
            </div>
        </div>
    )
}

export default Cart
