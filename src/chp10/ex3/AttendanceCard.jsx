import React from "react";
import './AttendanceCard.css'
import img1 from './img/르클레르.png'       //지정한 이미지를 img1이라는 변수로 사용한다

const students=[
    {id:1, name:"사", grade:"사", major:"math",avatar:"https://randomuser.me/api/portraits/men/1.jpg"},        //{} - 하나의 객체
    {id:2, name:"랑", grade:"랑", major:"earth",avatar:"https://randomuser.me/api/portraits/women/2.jpg"},
    {id:3, name:"해", grade:"해", major:"athletic",avatar:"https://randomuser.me/api/portraits/men/4.jpg"},
    {id:4, name:"요", grade:"요", major:"english",avatar:"https://randomuser.me/api/portraits/men/3.jpg"}
]

function AttendanceCard(){
    return(
        <div className="attendance-container">
            <h2 className="attendance-title">르클레르 이즈 굿</h2>
            <div className={"card-container"}>
                {
                    students.map((student)=> (
                        <div className={"student-card"}>
                            <img src={student.avatar} alt={student.name} className={"student-avatar"}/>
                            <div className={"student-info"}>
                            <h3>{student.name}</h3>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export default AttendanceCard;