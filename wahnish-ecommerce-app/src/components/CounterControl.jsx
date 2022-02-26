import '../App.css';

function CounterControl({ param1} , {param2} , {param3} , {param4}) {
    let quantity = Number(param4);
    let my_counter = (<div className="flex-container">
        <button id={param1}
            onClick={() => {
                quantity++;
                let valor = param2;
                document.getElementById(valor).value = quantity;
            }}
            className="btn btn-oval btn-xs btn-secondary"><em className="fa fa-plus"></em></button>
        <input id={param2} className="lessWidth" defaultValue="0"></input>
        <button id={param3}
            onClick={() => {
                if (quantity > 0) {
                    quantity--;
                    let valor = param2;
                    document.getElementById(valor).value = quantity;
                } else {
                    alert("Ya no quedan porciones de este item en el carrito")
                }
            }}
            className="btn btn-oval  btn-xs btn-secondary"><em className="fa fa-minus"></em></button>
    </div>)
    return (my_counter);
}


export default CounterControl;
