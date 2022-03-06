import '../App.css';
import circle from '../assets/circle.png';
const Spinner = () => {
    return (
        <div className="flex-item">
            <img id="circle" src={circle} alt="loading images" />
        </div>)
}

export default Spinner;
