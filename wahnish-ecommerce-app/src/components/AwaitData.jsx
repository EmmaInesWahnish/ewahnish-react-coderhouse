import '../App.css';
import ItemList from '../components/ItemList.jsx';
const AwaitData = () => {
    const myPromise = new Promise(function (resolve, reject) {
        setTimeout(function () {
        }, 2000);
        resolve(true);
    });

    myPromise.then(res => {
        console.log("Resolved: ", res);
    })

    return (
        <ItemList />
    )

}
export default AwaitData;

