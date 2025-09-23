import React from "react";
import Notification from "./Notification"

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

var timer;

class NotificationList extends React.Component{
    constructor(props){
        super(props);

        this.state={
            notifications: []
        }
    }

    componentDidMount(){
        const{notifications}=this.state;

        timer=setInterval(()=>{
            if(notifications.length< reservedNotifications.length)
            {
                const index=notifications.length;
                notifications.push(reservedNotifications[index])
                this.setState({
                    notifications: notifications //props의 내용을 변경하기 위해
                })
            }else
            {
                //notifications라는 state를 초기화
                this.setState({
                    notifications:[]
                })
                //interval 설정 해제
                clearInterval(timer)
            }
        },2000)     //2초에 한 번
    }

    componentWillUnmount(){
        if(timer){
            clearInterval(timer);
        }
    }

    render(){
        return(
            <div>
                {
                    this.state.notifications.map((notification)=>{
                        return <Notification
                            key={notification.id}
                            id={notification.id}
                            message={notification.message}
                        />
                    })
                }
            </div>
        )
    }
}

export default NotificationList;