import '../App.css';
import cazuela from '../assets/cazuela.png';
import cordero from '../assets/cordero.png';
import carne_a_la_olla from '../assets/carne-a-la-olla.png';
import locro from '../assets/locro.png';
import spaetzle from '../assets/spaetzle.png';
import empanadas from '../assets/empanadas.png';
import choripan from '../assets/choripan.png';
import CounterControl from './CounterControl.jsx';
import AddToCartButton from './AddToCartButton.jsx';

const RenderItems=()=> {
    let platos = [
        {
            id: "P000",
            categoria: "Internacionales",
            descripcion: "Cazuela de Mariscos",
            imagen: <img src={cazuela} alt="cazuela" />,
            precio: 500
        },
        {
            id: "P001",
            categoria: "Internacionales",
            descripcion: "Choripan especial con Chimichurri",
            imagen: <img src={choripan} alt="choripan" />,
            precio: 350
        },
        {
            id: "P002",
            categoria: "Internacionales",
            descripcion: "Carne a la olla con verduras",
            imagen: <img src={carne_a_la_olla} alt="carne" />,
            precio: 450
        },
        {
            id: "P003",
            categoria: "Internacionales",
            descripcion: "Pierna de cordero rellena",
            imagen: <img src={cordero} alt="cazuela" />,
            precio: 500
        },
        {
            id: "P004",
            categoria: "Internacionales",
            descripcion: "Pasta a los cuatro quesos",
            imagen: <img src={spaetzle} alt="pastas" />,
            precio: 350
        },
        {
            id: "P005",
            categoria: "Internacionales",
            descripcion: "Locro tipico con ganado vacuno y porcino",
            imagen: <img src={locro} alt="locro" />,
            precio: 450
        },
        {
            id: "P006",
            categoria: "Infantiles",
            descripcion: "Empanadas suaves de carne",
            imagen: <img src={empanadas} alt="empanadas" />,
            precio: 350
        }

    ]

    let quantity = [];
    let my_items = [];
    let myCategory = "All";
    let itemRender = 0;
    for (let item = 0; item < platos.length; item++) {
        let theId = [];
        for (let i = 0; i < 6; i++) {
            theId[i] = platos[item].id + "C0" + i;
        }
        quantity[item] = 0;
        let buttonId = platos[item].id + "C05"
        let param1 = buttonId + "ADD";
        let param2 = buttonId + "CAN";
        let param3 = buttonId + "SUB";
        let param4 = quantity[item];
        let idButtonAdd = buttonId + "CART";
        let counter = CounterControl({param1}, {param2}, {param3}, {param4})
        let add_button = AddToCartButton({idButtonAdd})
        if (myCategory === "All" || myCategory === platos[item].categoria) {
            itemRender++;
            my_items[itemRender] = (<tr>
                <td id={theId[0]}>{platos[item].id}</td>
                <td id={theId[1]}>{platos[item].categoria}</td>
                <td id={theId[2]}>{platos[item].descripcion}</td>
                <td className="flex-container">
                    <div id={theId[3]} className="image-size">
                        {platos[item].imagen}
                    </div>
                </td>   
                <td id={theId[4]}>{platos[item].precio}</td>
                <td id={buttonId}>
                    {counter}
                    {add_button}
                </td>
            </tr>)
        }
    }
    return (my_items);
}

export default RenderItems;
