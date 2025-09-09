import React from "react";
import "./UserInfo.css";
import "./Comment.css";
import UserInfo from "./UserInfo";

const users =[
    {
        name: "샤를 르클레르",
        comment:"페라리",
        avatarUrl:"https://i.pinimg.com/736x/e5/f1/1a/e5f11a98a8acf63297e844631071d5b4.jpg"
    },
    {
        name: "막스 베르스타펜",
        comment:"레드불",
        avatarUrl:"https://img.redbull.com/images/c_crop,x_1007,y_0,h_2646,w_1985/c_fill,w_450,h_600/q_auto,f_auto/redbullcom/2024/11/24/nrqoxx9as35r5ry8ashm/max-verstapen-2024-f1-world-champion-four"
    },
    {
        name: "루이스 해밀턴",
        comment:"페라리",
        avatarUrl:"https://i.namu.wiki/i/pQRxhwrP7RpPDv4qFxDjKJ4nLXxLczLsyPgSuEoeNH3fGgcbfxdPvq4yMCz36IMCf3E9MXNHmMwfq4AA132U1Q.webp"
    }
];

function Comment(props) {
    const currentDate =new Date();
    return (
        <div>
            {users.map((user) => {
                return (
                    <div className="comment">
                        <UserInfo user={user} />
                        <div className = "comment-text">
                            {user.comment}
                        </div>
                        <div className = "comment-date">
                            {currentDate.toDateString()}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Comment;