import React from "react";

const reservedNotifications=[
    {
        id:1,
        message:"스꾸삐"
    },
    {
        id:2,
        message:"스쿱"
    },
    {
        id:3,
        message:"스껄"
    }
];

class NotificationList extends React.Component{
    constructor(props){
        super(props);

        this.state={
            notifications: []
        }
    }

    componentDidMount(){

    }

    componentWillUnmount(){

    }

    render(){
        return(
            <div>

            </div>
        )
    }
}

export default NotificationList;