/*import logo from './logo.svg';*/
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar.jsx';
import FoodDelivery from './components/FoodDelivery.jsx';
import FooterInfo from './components/FooterInfo.jsx';
import ItemListContainer from './Container/ItemListContainer/ItemListContainer.jsx';
import ItemIdContainer from './Container/ItemListContainer/ItemIdContainer.jsx';
import ItemClassContainer from './Container/ItemListContainer/ItemClassContainer.jsx';
import Componente404 from './components/Componente404.jsx';
import Cart from './components/Cart/Cart.jsx';
import CartContextProvider from './context/cartContext.js';
import LoadFirestore from './helpers/ItemsCRUD.js'

function App() {
  return (
    <BrowserRouter>
    <CartContextProvider>
      <header>
        <div className="asBody">
          <div className="bg-warning">
            <NavBar />
          </div>
          <FoodDelivery />
        </div>
      </header>
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer />}
        />
        <Route
          path="/categoria/:id"
          element={<ItemListContainer />}
        />
        <Route
          path="/clase"
          element={<ItemClassContainer />}
        />
        <Route
          path="/clase/:id"
          element={<ItemClassContainer />}
        />
        <Route
          path="/cart"
          element={<Cart />}
        />
        <Route
          path="/test"
          element={<LoadFirestore />}
        />  
        <Route path='/detail/:id' element={<ItemIdContainer />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/clase' element={<ItemClassContainer />} />
        <Route path='/notFound' element={<Componente404 />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
      <FooterInfo />
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
