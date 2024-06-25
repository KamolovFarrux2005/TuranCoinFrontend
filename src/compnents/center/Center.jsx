import { useState, useEffect } from "react";
import './center.css';
const CenterComponent = () => {
    const [counter, setCounter] = useState(0);
    const counterFunction = () => {
        
        if(counter !== 10){
            setCounter(counter + 1)

        } else{
            alert("blockchain obi hayot :) bugungi limit tugadi!");
        }

        
    }
    return (
        <div className="center">
            <div className="counterCoinBalance">
                <h2>{counter} $TUC</h2>
            </div>
            <div className="coinImageClicker">
                <button className="btnCoinCounter" onClick={counterFunction} />
            </div>
        </div>
    )
}


export default CenterComponent;