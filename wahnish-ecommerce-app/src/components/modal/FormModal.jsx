import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { useCartContext } from "../../context/cartContext";
import db from '../../firebase.config.js';
import { collection, updateDoc, doc, addDoc, serverTimestamp } from 'firebase/firestore'
import "../../App.css"
import { omit } from 'lodash'

const Modal = ({ setIsOpen,setIsThereId,setOrderId }) => {
  const { cartList, sumaTotal, endPurchase } = useCartContext();
  const [email, setEmail] = useState("");
  const [email1, setEmail1] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState({});

  const validate = (name, value) => {

    switch (name) {
      case 'address':
        if (
          /^(?:[A-Za-z]+|\d+)$/.test(value)
        ) {
          setErrors({
            ...errors,
            address: 'La direccion debe contener letras y numeros'
          })
        } else {
          //omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, "address");
          setErrors(newObj);

        }
        break;

      case 'phone':
        let newObj = omit(errors, "phone");
        setErrors(newObj);
        break;

      case 'email':
        if (
          !new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
        ) {
          setErrors({
            ...errors,
            email: 'Ingrese un email valido'
          })
        } else {

          let newObj = omit(errors, "email");
          setErrors(newObj);

        }
        break;

      case 'email1':
        if (
          !new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
        ) {
          setErrors({
            ...errors,
            email1: 'Ingrese un email valido'
          })
        } else {

          let newObj = omit(errors, "email1");
          setErrors(newObj);

        }
        break;

      case 'password':
        if (
          !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
        ) {
          setErrors({
            ...errors,
            password: 'Password deberia contener al menos 8 carateres, mayusculas, minusculas y numeros'
          })
        } else {

          let newObj = omit(errors, "password");
          setErrors(newObj);

        }
        break;

      default:
        break;
    }

  }

  const handleChange = (e) => {

    let name = e.target.name;
    let val = e.target.value;

    validate(name, val);
    //Let's set these values in state
    switch (name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "email1":
        setEmail1(e.target.value);
        break;
      case "phone":
        setPhone(e.target.value);
        break;
      case "address":
        setAddress(e.target.value);
        break;
      default:
        break;
    }

  }

  const handleSubmit = () => {
    let goSubmit = true;
    function lastControl() {
      goSubmit=true;
      if (email1 !== email || errors.length>0) {
        goSubmit = false;
      }
    }

    lastControl();

    if (goSubmit === true) {

      const handleUpdate = async (element) => {
        const id = element.id;
        const porciones = element.porciones - element.cantidad;
        const docRef = doc(db, "items", id);
        const payload = {
          porciones
        }
        updateDoc(docRef, payload);
      }

      let importeTotal = sumaTotal();

      cartList.forEach((element) => {
        handleUpdate(element)
      });

      const userInfo = {
        email: email,
        phone: phone,
        address: address
      }

      const handleAdd = async (userInfo, cartList) => {
        const date = serverTimestamp();
        const buyer = userInfo;
        const items = cartList.map((element) => {
          let item = {
            id: element.id,
            title: element.descripcion,
            price: element.precio
          }
          return item;
        });
        const price = importeTotal;
        const collectionRef = collection(db, "orders");
        const payload = {
          date,
          buyer,
          items,
          price
        }
        const docRef = await addDoc(collectionRef, payload);
        setIsThereId(true);
        setOrderId(docRef.id);
      }
      handleAdd(userInfo, cartList);
      endPurchase();
    }
    else {
      alert("Por favor corrija la informacion. Los email deben coincidir")
    }
  }

  return (
    <>
      <div className="flex-modal-container">
        <div className="flex-modal-buttons m-2">
          <h3>Despacho de su orden</h3>
          <button className="close">
            <RiCloseLine />
          </button>
        </div>
        <div>
          <form>
            <div className="flex-modal-form m-2">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                value={email}
                onChange={handleChange}
              />
              {
                errors.email && <h5>{errors.email}</h5>
              }
            </div>
            <div className="flex-modal-form m-2">
              <label htmlFor="email1">Repita Email</label>
              <input
                name="email1"
                type="text"
                value={email1}
                onChange={handleChange}
              />
              {
                errors.email1 && <h5>{errors.email1}</h5>
              }
            </div>
            <div className="flex-modal-form m-2">
              <label htmlFor="phone">Telefono</label>
              <input
                name="phone"
                type="text"
                value={phone}
                onChange={handleChange}
              />
              {
                errors.phone && <h5>{errors.phone}</h5>
              }
            </div>
            <div className="flex-modal-form m-2">
              <label htmlFor="address">Direccion</label>
              <input
                name="address"
                type="text"
                value={address}
                onChange={handleChange}
              />
              {
                errors.address && <h5>{errors.address}</h5>
              }
            </div>
          </form>
        </div>
        <div className="flex-modal-buttons m-2">
          <button
            className="btn btn-success btn-lg"
            onClick={() => handleSubmit()}
          >
            Enviar
          </button>
          <button
            className="btn btn-light btn-lg"
            onClick={() => setIsOpen(false)}
          >
            Cancelar
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;