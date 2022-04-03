
import { useState, useEffect } from 'react';
import db from '../firebase.config.js';
import { onSnapshot, collection, doc, deleteDoc } from 'firebase/firestore'

const OrderControl = () => {
    const [docus, setDocus] = useState([]);

    useEffect(() => {
        const myResult = onSnapshot(collection(db, "orders"), (snapshot) => {
            setDocus(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        })

        return myResult;

    }, []);

    const handleDelete = async (element) => {
        const id = element.id;
        const docRef = doc(db, "orders", id);
        deleteDoc(docRef);
    }

    return (
        <>
            <div>
                <table id="items-table" className="table table-responsive table-sm table-bordered table-striped">
                    <thead>
                        <tr id="topRow">
                            <th id="toppRow00">Identificacion</th>
                            {/*<th >Fecha</th>*/}
                            <th >Comprador</th>
                            <th >Precio</th>
                            <th >Items</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {docus.map(item => <tr key={item.id + "OI"}>
                            <td>{item.id}</td>
                            {/*<td>{item.date}</td>*/}
                            <td>
                                <ul>
                                    <li style={{ listStyleType: "none" }}>{item.buyer.email} Direccion {item.buyer.address}</li>
                                </ul>
                            </td>
                            <td>{item.price}</td>
                            <td>
                                {item.items.map((elemento) => (
                                    <ul key={item.id + elemento.id}>
                                        <li>{elemento.descripcion} Cantidad {elemento.cantidad}</li>
                                    </ul>
                                ))}
                            </td>
                            <td><button className="roundButton" onClick={() => handleDelete(item)}><i className="fas fa-trash-alt brick" ></i></button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </>
    )
}


export default OrderControl;