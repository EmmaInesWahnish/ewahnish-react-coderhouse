import '../App.css';
const Greeting=( {saludo})=> {
    saludo = "Bienvenidos!! Prueben nuestros platos Internacionales!!"
    return (
        <div class="flex-container">
            <h2>{saludo}</h2>
        </div>   
    );
}

export default Greeting;
