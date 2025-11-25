import React from "react";

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            <div className="smoke"></div>
            <div className="light-glow"></div>
            {props.children}
        </div>
    );
}

export default FancyBorder;