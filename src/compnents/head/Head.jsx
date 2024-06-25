import React from "react";
import './head.css'

const HeadComponent = ()=>{
    // const CoinName = "TuranCoin";
    const coinShortName = "$TUC";

    return(

    <div className="headComponent">
        <div className="flexCardHead">
            <div className="profileData">
                <img src="https://www.turkicstates.org/assets/vendor/kcfinder/upload/images/turkkon-logo(1).png" alt="Logo" />
                <h2>John Doe</h2>
            </div>
            <div className="coinShortName">
                <b>{coinShortName}</b>
            </div>
        </div>
    </div>
    )
}


export default HeadComponent;