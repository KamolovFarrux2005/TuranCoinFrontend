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
                <a href="#" onClick={counterFunction}>
                    <img src="https://www.turkicstates.org/assets/vendor/kcfinder/upload/images/turkkon-logo(1).png" alt="coinlogo" />
                </a>
            </div>
        </div>
    )
}


export default CenterComponent;