import '../App.css';
const Greeting=({saludo})=> {
    return (
        <div className ="flex-container">
            <h2>{saludo}</h2>
        </div>   
    );
}

export default Greeting;
