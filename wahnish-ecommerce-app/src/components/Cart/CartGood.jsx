import { useCartContext } from "../../context/cartContext"

function Cart() {
    const { cartList, vaciarCarrito, finalizarCompra } = useCartContext();
    let importeTotal = 0;
    cartList.forEach(calculateTotalPrice);
    function calculateTotalPrice(element) {
        importeTotal = importeTotal + (element.precio * element.cantidad);
    }
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
                <div className="m-3">
                    <h3>Importe Total </h3>
                    <h3>{importeTotal}</h3>
                </div>
            </div>
            <div>
                <button className="btn btn-danger btn-lg button m-3 " onClick={vaciarCarrito}>Cancelar Compra</button>
                <button className="btn btn-success btn-lg button m-3 " onClick={finalizarCompra}>Finalizar Compra</button>
            </div>
        </div>
    )
}

export default Cart
