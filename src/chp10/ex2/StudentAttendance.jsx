import React from "react";

const students=[
    {id:1, name:"김철수", grade:"2", major:"math"},        //{} - 하나의 객체
    {id:2, name:"배진서", grade:2, major:"earth"},
    {id:3, name:"진순이", grade:"9", major:"athletic"},
    {id:4, name:"스컬", grade:3, major:"english"},
    {id:5, name:"박대기", grade:"7", major:"science"}
]

function StudentAttendance(){
    return(
        <div>
            <h2>학생 출석부</h2>
            <ul>
                {
                    students.map((studentInfo)=>(           //JSX를 바로 반환하고 싶을 땐 화살표 함수에서 {} 사용 후 return 하는 대신 ()를 쓰면 자동으로 그 안의 JSX를 반환한다는 뜻이야.
                        <li key={studentInfo.id}>
                            <b>{studentInfo.name}</b> - {studentInfo.grade}학년, {studentInfo.major}
                        </li>
                        )
                    )
                }
            </ul>
        </div>
    );
}


export default StudentAttendance;