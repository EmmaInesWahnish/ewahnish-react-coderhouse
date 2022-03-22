import cazuela from '../assets/cazuela.png';
import cordero from '../assets/cordero.png';
import carne_a_la_olla from '../assets/carne-a-la-olla.png';
import locro from '../assets/locro.png';
import spaetzle from '../assets/spaetzle.png';
import empanadas from '../assets/empanadas.png';
import choripan from '../assets/choripan.png';
import hotDog from '../assets/hotDogKids.jpg';
import omelette from '../assets/omeletteKids.jpg';
import albondigas from '../assets/pastaAlbondigas.jpg';
import panSalchicha from '../assets/pigsInBlanket.jpg';
import easycroissant from '../assets/easycroissant.jpg';
import pancakes from '../assets/pancakes.jpg';
import cremalimon from '../assets/cremalimon.jpg';
import frutillas from '../assets/frutillas.jpg';
import tiramisu from '../assets/tiramisu.jpg';

const platos = [
    {
        id: "P000",
        categoria: "plato",
        clase: "general",
        descripcion: "Cazuela de Mariscos",
        imagen: <img src={cazuela} alt="cazuela" />,
        calorias: 680,
        precio: 500,
        porciones: 50
    },
    {
        id: "P001",
        categoria: "plato",
        clase: "general",
        descripcion: "Choripan con Chimichurri",
        imagen: <img src={choripan} alt="choripan" />,
        calorias: 680,
        precio: 350,
        porciones: 100
    },
    {
        id: "P002",
        categoria: "plato",
        clase: "general",
        descripcion: "Carne a la olla con verduras",
        imagen: <img src={carne_a_la_olla} alt="carne" />,
        calorias: 680,
        precio: 450,
        porciones: 40
    },
    {
        id: "P003",
        categoria: "plato",
        clase: "general",
        descripcion: "Pierna de cordero rellena",
        imagen: <img src={cordero} alt="cazuela" />,
        calorias: 680,
        precio: 500,
        porciones: 20
    },
    {
        id: "P004",
        categoria: "plato",
        clase: "general",
        descripcion: "Pasta a los cuatro quesos",
        imagen: <img src={spaetzle} alt="pastas" />,
        calorias: 680,
        precio: 350,
        porciones: 80
    },
    {
        id: "P005",
        categoria: "plato",
        clase: "general",
        descripcion: "Locro con carne vacuna y porcina",
        imagen: <img src={locro} alt="locro" />,
        calorias: 680,
        precio: 450,
        porciones: 30
    },
    {
        id: "P006",
        categoria: "plato",
        clase: "general",
        descripcion: "Empanadas de carne (c/por. 3 u)",
        imagen: <img src={empanadas} alt="empanadas" />,
        calorias: 680,
        precio: 350,
        porciones: 150
    },
    {
        id: "P007",
        categoria: "plato",
        clase: "infantil",
        descripcion: "Hot Dogs",
        imagen: <img src={hotDog} alt="salchichas" />,
        calorias: 680,
        precio: 300,
        porciones: 60
    },
    {
        id: "P008",
        categoria: "plato",
        clase: "infantil",
        descripcion: "Omelette de queso y jamon con arroz",
        imagen: <img src={omelette} alt="omelette" />,
        calorias: 680,
        precio: 350,
        porciones: 80
    },
    {
        id: "P009",
        categoria: "plato",
        clase: "infantil",
        descripcion: "Pasta con albondigas",
        imagen: <img src={albondigas} alt="locro" />,
        calorias: 680,
        precio: 350,
        porciones: 80
    },
    {
        id: "P010",
        categoria: "plato",
        clase: "infantil",
        descripcion: "Pan de Salchicha (c/por. 6 u)",
        imagen: <img src={panSalchicha} alt="pan de salchicha" />,
        calorias: 680,
        precio: 400,
        porciones: 150
    },
    {
        id: "P011",
        categoria: "desayuno",
        clase: "general",
        descripcion: "Medialunas con jamon, queso y huevo",
        imagen: <img src={easycroissant} alt="croissant" />,
        calorias: 680,
        precio: 350,
        porciones: 80
    },
    {
        id: "P012",
        categoria: "desayuno",
        clase: "general",
        descripcion: "Panqueques americanos con frutas",
        imagen: <img src={pancakes} alt="panqueques" />,
        calorias: 680,
        precio: 400,
        porciones: 150
    },
    {
        id: "P013",
        categoria: "postre",
        clase: "infantil",
        descripcion: "Crema al limon",
        imagen: <img src={cremalimon} alt="Crema al limon" />,
        calorias: 680,
        precio: 400,
        porciones: 150
    },
    {
        id: "P014",
        categoria: "postre",
        clase: "general",
        descripcion: "Frutillas con Crema",
        imagen: <img src={frutillas} alt="frutillas" />,
        calorias: 680,
        precio: 350,
        porciones: 80
    },
    {
        id: "P015",
        categoria: "postre",
        clase: "general",
        descripcion: "Tiramisu",
        imagen: <img src={tiramisu} alt="tiramisu" />,
        calorias: 680,
        precio: 400,
        porciones: 150
    }

]

const getFetch = () => {
    return (
        new Promise(function (resolve, reject) {
            setTimeout(function () { 
                resolve(platos);                
            }, 2000);
        })
    )
}

export default getFetch;