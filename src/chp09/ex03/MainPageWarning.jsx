import React, {useState} from "react";
import WarningBanner from "./WarningBanner";
import './MainPage_style.css';

function MainPageWarning(){
    const [showWarning, setShowWarning] = useState(false)

    const handletoggleClick = () => {
        setShowWarning(prevShowWarning => !prevShowWarning)
    }

    return(
        <div>
            <WarningBanner warning={showWarning}/>
            <button onClick={handletoggleClick} className={`toggle-button ${showWarning ? 'hide' : ''}`}>
                {showWarning ? "감추기" : "보이기"}
            </button>
        </div>
    );
}

export default MainPageWarning;