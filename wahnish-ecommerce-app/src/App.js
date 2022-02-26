/*import logo from './logo.svg';*/
import './App.css';
import NavBar from './components/NavBar.jsx';
import FoodDelivery from './components/FoodDelivery.jsx';
import FooterInfo from './components/FooterInfo.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ModalComponent from './components/ModalComponent.jsx';
function App() {
   let saludo = "Hola! Bienvenidos a nuestro delivery de comidas internacionales."
   return (
      <body>
         <header>
            <NavBar />
            <FoodDelivery />
         </header>
         <main>
            <ItemListContainer saludo = {saludo} />
         </main>
         <FooterInfo />
         <ModalComponent />
      </body>
   );
}

export default App;
