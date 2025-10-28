import React from "react";
import './AttendanceCard.css'
import img1 from './img/르클레르.png'       //지정한 이미지를 img1이라는 변수로 사용한다

const students=[
    {id:1, name:"김철수", grade:"2", major:"math",avatar:"https://randomuser.me/api/portraits/men/1.jpg"},        //{} - 하나의 객체
    {id:2, name:"배진서", grade:2, major:"earth",avatar:"https://randomuser.me/api/portraits/women/2.jpg"},
    {id:3, name:"진순이", grade:"9", major:"athletic",avatar:"https://randomuser.me/api/portraits/men/3.jpg"},
    {id:4, name:"스컬", grade:3, major:"english",avatar:img1},
    {id:5, name:"박대기", grade:"7", major:"science",avatar:"https://randomuser.me/api/portraits/men/5.jpg"}
]

function AttendanceCard(){
    return(
        <div className="attendance-container">
            <h2 className="attendance-title">학생 출석부</h2>
            <div className={"card-container"}>
                {
                    students.map((student)=> (
                        <div className={"student-card"}>
                            <img src={student.avatar} alt={student.name} className={"student-avatar"}/>
                            <div className={"student-info"}>
                            <h3>{student.name}</h3>
                            <p>{student.grade}학년 - {student.major}전공</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export default AttendanceCard;