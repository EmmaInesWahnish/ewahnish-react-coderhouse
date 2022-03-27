
import { useState, useEffect } from 'react';
import db from '../firebase.config.js';
import { onSnapshot, collection, setDoc, doc, addDoc } from 'firebase/firestore'

const platos = [
    {
        id: "P000",
        categoria: "plato",
        clase: "general",
        descripcion: "Cazuela de Mariscos",
        imagen: "https://firebasestorage.googleapis.com/v0/b/wahnish-ecommerce-coderhouse.appspot.com/o/cazuela.png?alt=media&token=b9295812-6afb-48ac-b593-050e48ab2c00",
        calorias: 450,
        precio: 500,
        porciones: 50
    },
    {
        id: "P001",
        categoria: "plato",
        clase: "general",
        descripcion: "Choripan con Chimichurri",
        imagen: "https://firebasestorage.googleapis.com/v0/b/wahnish-ecommerce-coderhouse.appspot.com/o/choripan.png?alt=media&token=5ddbe259-2615-4dc5-b45e-9e5f890fd8e7",
        calorias: 910,
        precio: 350,
        porciones: 100
    },
    {
        id: "P002",
        categoria: "plato",
        clase: "general",
        descripcion: "Carne a la olla con verduras",
        imagen: "https://firebasestorage.googleapis.com/v0/b/wahnish-ecommerce-coderhouse.appspot.com/o/carne-a-la-olla.png?alt=media&token=122bb68e-cc49-458a-af3c-93cd466c22da",
        calorias: 680,
        precio: 450,
        porciones: 40
    },
    {
        id: "P003",
        categoria: "plato",
        clase: "general",
        descripcion: "Pierna de cordero rellena",
        imagen: "https://firebasestorage.googleapis.com/v0/b/wahnish-ecommerce-coderhouse.appspot.com/o/cordero.png?alt=media&token=7e109b38-17e2-491c-a0d5-10d7539fe976",
        calorias: 680,
        precio: 500,
        porciones: 20
    },
    {
        id: "P004",
        categoria: "plato",
        clase: "general",
        descripcion: "Pasta a los cuatro quesos",
        imagen: "https://firebasestorage.googleapis.com/v0/b/wahnish-ecommerce-coderhouse.appspot.com/o/spaetzle.png?alt=media&token=b03fe245-1018-46be-9114-a787872625bf",
        calorias: 307,
        precio: 350,
        porciones: 80
    },
    {
        id: "P005",
        categoria: "plato",
        clase: "general",
        descripcion: "Locro con carne vacuna y porcina",
        imagen:"https://firebasestorage.googleapis.com/v0/b/wahnish-ecommerce-coderhouse.appspot.com/o/locro.png?alt=media&token=cb66292f-0b66-40f2-bdc5-7211cc5da66d",
        calorias: 576,
        precio: 450,
        porciones: 30
    },
    {
        id: "P006",
        categoria: "plato",
        clase: "general",
        descripcion: "Empanadas de carne (c/por. 3 u)",
        imagen: "https://firebasestorage.googleapis.com/v0/b/wahnish-ecommerce-coderhouse.appspot.com/o/empanadas.png?alt=media&token=3cbca930-f603-4fe1-9f52-87575a2c418c",
        calorias: 780,
        precio: 350,
        porciones: 150
    },
    {
        id: "P007",
        categoria: "plato",
        clase: "infantil",
        descripcion: "Hot Dogs",
        imagen: "https://firebasestorage.googleapis.com/v0/b/wahnish-ecommerce-coderhouse.appspot.com/o/hotDogKids.jpg?alt=media&token=3e50d77c-2c43-44ef-92e5-78343020c791",
        calorias: 680,
        precio: 300,
        porciones: 60
    },
    {
        id: "P008",
        categoria: "plato",
        clase: "infantil",
        descripcion: "Omelette de queso y jamon con arroz",
        imagen: "https://firebasestorage.googleapis.com/v0/b/wahnish-ecommerce-coderhouse.appspot.com/o/omeletteKids.jpg?alt=media&token=59b4a652-2417-4446-9944-d14a51925ae9",
        calorias: 815,
        precio: 350,
        porciones: 80
    },
    {
        id: "P009",
        categoria: "plato",
        clase: "infantil",
        descripcion: "Pasta con albondigas",
        imagen: "https://firebasestorage.googleapis.com/v0/b/wahnish-ecommerce-coderhouse.appspot.com/o/pastaAlbondigas.jpg?alt=media&token=1ffe376b-159c-4cc8-a60a-8387cbd38ad6",
        calorias: 270,
        precio: 350,
        porciones: 80
    },
    {
        id: "P010",
        categoria: "plato",
        clase: "infantil",
        descripcion: "Pan de Salchicha (c/por. 6 u)",
        imagen: "https://firebasestorage.googleapis.com/v0/b/wahnish-ecommerce-coderhouse.appspot.com/o/pigsInBlanket.jpg?alt=media&token=bdc0dd99-0f35-4f0b-8183-726674034c72",
        calorias: 748,
        precio: 400,
        porciones: 150
    },
    {
        id: "P011",
        categoria: "desayuno",
        clase: "general",
        descripcion: "Medialunas con jamon, queso y huevo",
        imagen: "https://firebasestorage.googleapis.com/v0/b/wahnish-ecommerce-coderhouse.appspot.com/o/easycroissant.jpg?alt=media&token=5d52a0ff-3d00-4926-87b5-11ebef97ee27",
        calorias: 414,
        precio: 350,
        porciones: 80
    },
    {
        id: "P012",
        categoria: "desayuno",
        clase: "general",
        descripcion: "Panqueques americanos con frutas",
        imagen: "https://firebasestorage.googleapis.com/v0/b/wahnish-ecommerce-coderhouse.appspot.com/o/pancakes.jpg?alt=media&token=b80a22a9-f96c-43ef-a0d4-71be05074400",
        calorias: 550,
        precio: 400,
        porciones: 150
    },
    {
        id: "P013",
        categoria: "postre",
        clase: "infantil",
        descripcion: "Crema al limon",
        imagen: "https://firebasestorage.googleapis.com/v0/b/wahnish-ecommerce-coderhouse.appspot.com/o/cremalimon.jpg?alt=media&token=776ea492-d779-43b6-afaf-ed304d5977cd",
        calorias: 302,
        precio: 400,
        porciones: 150
    },
    {
        id: "P014",
        categoria: "postre",
        clase: "general",
        descripcion: "Frutillas con Crema",
        imagen: "https://firebasestorage.googleapis.com/v0/b/wahnish-ecommerce-coderhouse.appspot.com/o/frutillas.jpg?alt=media&token=0a5bf8ad-80a7-4a65-8bc0-405dafd21acc",
        calorias: 310,
        precio: 350,
        porciones: 80
    },
    {
        id: "P015",
        categoria: "postre",
        clase: "general",
        descripcion: "Tiramisu",
        imagen: "https://firebasestorage.googleapis.com/v0/b/wahnish-ecommerce-coderhouse.appspot.com/o/tiramisu.jpg?alt=media&token=23d6fe61-bb4c-4a5d-a9e6-d218cd178c39",
        calorias: 510,
        precio: 400,
        porciones: 150
    }

]

const LoadFirebase = () => {
    const [docus, setDocus] = useState([]);

    useEffect(() => {
        const myResult = onSnapshot(collection(db, "items"), (snapshot) => {
            setDocus(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        })

        return myResult;

    }, []);

    function cargar(){
        //platos.forEach(element => handleNew(element))
    }

    const handleNew = async (element)=>{
        const categoria = element.categoria;
        const clase = element.clase;
        const descripcion = element.descripcion;
        const imagen = element.imagen;
        const calorias = element.calorias;
        const precio = element.precio;
        const porciones = element.porciones;
        const collectionRef = collection(db, "items");
        const payload = {
            categoria,
            clase,
            descripcion,
            imagen,
            calorias,
            precio,
            porciones
        }
        const docRef = await addDoc(collectionRef, payload);
        console.log("Item Id = ", docRef.id)
    }


    return (
        <>
            <div>
                <button className="btn btn-info m-3" onClick={cargar}>Cargar Items</button>
            </div>
            <div>
                <ul>
                    {docus.map((item) => (
                        <li key={item.id + "CI"}>
                            {item.id},
                            {item.id},{item.descripcion},<img src={item.imagen} alt={item.descripcion} />
                        </li>
                    ))

                    }
                </ul>
            </div>
        </>
    )
}


export default LoadFirebase;