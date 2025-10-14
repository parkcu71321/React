import React from "react";

function UserGreeting(props)        //props - 전달 받는 매개변수
{
    return <h1>다시 오셨군요</h1>
}

function GuestGreeting(props)
{
    return <h1>회원 가입해</h1>
}

function Greeting(props)
{
    const isLoggedIn=props.isLoggedIn;              //isLoggedIn 정의 되지 않은 상태이기 때문에 false 반환
    if(isLoggedIn)
    {
        return <UserGreeting/>
    }
    else
        return <GuestGreeting/>
}

export default Greeting;