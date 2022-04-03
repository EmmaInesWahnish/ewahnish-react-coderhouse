
import { useState, useEffect } from 'react';
import db from '../firebase.config.js';
import { onSnapshot, collection, updateDoc, doc, addDoc, deleteDoc } from 'firebase/firestore'

const LoadFirebase = () => {
    const [docus, setDocus] = useState([]);

    useEffect(() => {
        const myResult = onSnapshot(collection(db, "items"), (snapshot) => {
            setDocus(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        })

        return myResult;

    }, []);

    const handleDuplicate = async (element) => {
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

    const handleUpdatePrice = async (element) => {
        let newPrice = prompt("Nuevo precio")
        const id = element.id;
        const precio = newPrice;
        const docRef = doc(db, "items", id);
        const payload = {
            precio
        }
        updateDoc(docRef, payload);
    }

    const handleUpdatePorciones = async (element) => {
        let newPortions = prompt("Porciones")
        const id = element.id;
        const porciones = newPortions;
        const docRef = doc(db, "items", id);
        const payload = {
            porciones
        }
        updateDoc(docRef, payload);
    }

    const handleDelete = async (element) => {
        const id = element.id;
        const docRef = doc(db, "items", id);
        deleteDoc(docRef);
    }

    return (
        <>
            <div>
                <table id="items-table" className="table table-responsive table-sm table-bordered table-striped">
                    <thead>
                        <tr id="topRow">
                            <th id="toppRow00">Identificacion</th>
                            <th >Categoria</th>
                            <th >Clase</th>
                            <th >Descripcion</th>
                            <th >Calorias</th>
                            <th >Porciones</th>
                            <th >Precio</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {docus.map(item => <tr key={item.id + "CI"}>
                            <td>{item.id}<i className="fas fa-clone purple" onClick={() => handleDuplicate(item)}></i></td>
                            <td>{item.categoria}</td>
                            <td>{item.clase}</td>
                            <td>{item.descripcion}</td>
                            <td>{item.calorias}</td>
                            <td>{item.porciones}<i className="fas fa-pen-nib green" onClick={() => handleUpdatePorciones(item)}></i></td>
                            <td>{item.precio}<i onClick={() => handleUpdatePrice(item)} className="fas fa-pen-nib green"></i></td>
                            <td><button className="roundButton" onClick={() => handleDelete(item)}><i className="fas fa-trash-alt brick" ></i></button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </>
    )
}


export default LoadFirebase;