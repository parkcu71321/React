import React, {useState} from "react";
import LogOutButton from "./LogOutButton";
import LoginButton from "./LoginButton";
import Greeting from "../ex01/Greeting";

function LoginControl(props)
{
    const [isLoggedIn,setIsLoggedIn]=useState(false);

    const hadleLogInClick=()=>{
        setIsLoggedIn(true)
    }

    const hadleLogOutClick=()=>{
        setIsLoggedIn(false)
    }

    let btn;

    if(isLoggedIn)
    {
        btn=<LogOutButton onClick={hadleLogOutClick}/>
    }
    else
    {
        btn=<LoginButton onClick={hadleLogInClick}/>
    }
    return(
        <div>
            <Greeting isLoggedIn={isLoggedIn}/>
            {btn}
        </div>
    )
}

export default LoginControl;