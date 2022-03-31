
import { useState, useEffect } from 'react';
import db from '../firebase.config.js';
import { onSnapshot, collection, setDoc, updateDoc, doc, addDoc } from 'firebase/firestore'

const LoadFirebase = () => {
    const [docus, setDocus] = useState([]);

    useEffect(() => {
        const myResult = onSnapshot(collection(db, "items"), (snapshot) => {
            setDocus(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        })

        return myResult;

    }, []);

    const handleUpdate = async (element) => {
        let newPrice = prompt("Nuevo precio")
        const id = element.id;
        const precio = newPrice;
        const docRef = doc(db, "items", id);
        const payload = {
            precio
        }
        updateDoc(docRef, payload);
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
                            <th>Actualizar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {docus.map(item => <tr key={item.id + "CI"}>
                            <td>{item.id}</td>
                            <td>{item.categoria}</td>
                            <td>{item.clase}</td>
                            <td>{item.descripcion}</td>
                            <td>{item.calorias}</td>
                            <td>{item.porciones}</td>
                            <td>{item.precio}</td>
                            <td><button className="roundButtonI" onClick={() => handleUpdate(item)}><i className="far fa-dot-circle green" ></i></button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </>
    )
}


export default LoadFirebase;