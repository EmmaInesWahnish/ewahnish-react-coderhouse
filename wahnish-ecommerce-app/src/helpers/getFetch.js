import cazuela from '../assets/cazuela.png';
import cordero from '../assets/cordero.png';
import carne_a_la_olla from '../assets/carne-a-la-olla.png';
import locro from '../assets/locro.png';
import spaetzle from '../assets/spaetzle.png';
import empanadas from '../assets/empanadas.png';
import choripan from '../assets/choripan.png';

const platos = [
    {
        id: "P000",
        tipo: "Platos",
        categoria: "Internacionales",
        descripcion: "Cazuela de Mariscos",
        imagen: <img src={cazuela} alt="cazuela" />,
        precio: 500,
        porciones: 50
    },
    {
        id: "P001",
        tipo: "Platos",
        categoria: "Internacionales",
        descripcion: "Choripan con Chimichurri",
        imagen: <img src={choripan} alt="choripan" />,
        precio: 350,
        porciones: 100
    },
    {
        id: "P002",
        tipo: "Platos",
        categoria: "Internacionales",
        descripcion: "Carne a la olla con verduras",
        imagen: <img src={carne_a_la_olla} alt="carne" />,
        precio: 450,
        porciones: 40
    },
    {
        id: "P003",
        tipo: "Platos",
        categoria: "Internacionales",
        descripcion: "Pierna de cordero rellena",
        imagen: <img src={cordero} alt="cazuela" />,
        precio: 500,
        porciones: 20
    },
    {
        id: "P004",
        tipo: "Platos",
        categoria: "Internacionales",
        descripcion: "Pasta a los cuatro quesos",
        imagen: <img src={spaetzle} alt="pastas" />,
        precio: 350,
        porciones: 80
    },
    {
        id: "P005",
        tipo: "Platos",
        categoria: "Internacionales",
        descripcion: "Locro con ganado vacuno y porcino",
        imagen: <img src={locro} alt="locro" />,
        precio: 450,
        porciones: 30
    },
    {
        id: "P006",
        tipo: "Platos",
        categoria: "Infantiles",
        descripcion: "Empanadas suaves de carne",
        imagen: <img src={empanadas} alt="empanadas" />,
        precio: 350,
        porciones: 150
    }

]

const getFetch = () => {
    return (
        new Promise(function (resolve, reject) {
            setTimeout(function () { }, 2000);
            resolve(platos);
        })
    )
}

export default getFetch;