import '../App.css';

function AddToCartButton({ idButtonAdd }) {
    let add_button = (
    <div className="flex-container">
        <button id={idButtonAdd}
            onClick={() => {
                alert("Rutina de incorporación de las porciones al pedido")
            }}
            className="btn btn-oval btn-primary "><em className="fa fa-plus"> Agregar al pedido</em>
        </button>
    </div>)
    return (add_button);
}

export default AddToCartButton;
