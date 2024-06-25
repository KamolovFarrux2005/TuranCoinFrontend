import { useState, useEffect } from "react";
import './center.css';
const CenterComponent = () => {
    const coinBalance = 0;
    const [counter, setCounter] = useState(coinBalance);
    const counterFunction = () => {
        setCounter(counter + 1)
    }
    return (
        <div className="center">
            <div className="counterCoinBalance">
                <h2>{coinBalance} $TUC</h2>
            </div>
            <div className="coinImageClicker">
                <button className="btnCoinCounter" onClick={counterFunction}>
                    <img src="" alt="coinlogo" />
                </button>
            </div>
        </div>
    )
}


export default CenterComponent;