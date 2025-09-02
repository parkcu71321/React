import React from "react";
import Button from "./Button";

function ConfirmDialog(props){
    return(
        <div id={props.div} className="dialog-box">
            <p>{props.children} 을 확인 후 버튼을 눌러주세요</p>
            <br/>
            <Button color='green'>확인</Button>
            <Button color='blue'>취소</Button>
            <Button color='red'>철회</Button>
        </div>
    )
}

export default ConfirmDialog;