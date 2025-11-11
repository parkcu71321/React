import React from "react";


function BoilVerdict(props){
    if (props.celsius >= 100) {
        return <p className="boil">물이 끓음!</p>;
    } else {
        return <p className="not-boil">물이 안 끓음</p>;
    }
}

export default BoilVerdict;