import React from "react";
import './head.css'

const HeadComponent = ()=>{
    // const CoinName = "TuranCoin";
    const coinShortName = "$TUC";

    return(

    <div className="headComponent">
        <div className="flexCardHead">
            <div className="profilePicture">
                <img src="https://www.turkicstates.org/assets/vendor/kcfinder/upload/images/turkkon-logo(1).png" alt="Logo" />
            </div>
            <div className="profileUsername">
                John Doe
            </div>
            <div className="coinShortName">
                {coinShortName}
            </div>
        </div>
    </div>
    )
}


export default HeadComponent;