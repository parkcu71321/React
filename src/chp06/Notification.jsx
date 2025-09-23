import React from "react";
import "./Notification.css";

class Notification extends React.Component{
    constructor(props){
        super(props);

        this.state={};
    }

    render(){
        return(
            <div className="wrapper">
                <span className="messageText">{this.props.message}</span>
            </div>
        )
    }
}

export default Notification;            //다른 파일에서 Notification 컴포넌트를 import 할 수 있게 내보냄