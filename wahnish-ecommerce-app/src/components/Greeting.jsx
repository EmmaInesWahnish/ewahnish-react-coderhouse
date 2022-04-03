import '../App.css';
const Greeting=({greeting})=> {
    return (
        <div className ="flex-container">
            <h2>{greeting}</h2>
        </div>   
    );
}

export default Greeting;
