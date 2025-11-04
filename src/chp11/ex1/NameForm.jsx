import React, {useState} from "react";
import "./NameForm.css";

function NameForm(){
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[address,setAddress]=useState('');

    const handleChange=(event)=>{
        const{target}=event;        //target - 이벤트가 발생한 요소, 여기서는 <input> 태그(id,type,value 등등)

        switch(target.id){
            case "name":
                setName(target.value.toUpperCase());
                break;

            case "email":
                setEmail(target.value);
                break;

            case "address":
                setAddress(target.value);
        }
    }

    const handleSubmit=()=>{
        alert(`입력된 성명: ${name}
        입력된 이메일: ${email}
        입력된 주소: ${address}`);
    }

    return(
        <form onSubmit={handleSubmit}>      {/*제출 이벤트가 발생되면 handleSubmit 호출*/}
            <label>
                이름: <input type={"text"} id={"name"} onChange={handleChange}/>
            </label>
            <label>
                이메일: <input type={"email"} id={"email"} onChange={handleChange}/>
            </label>
            <label>
                주소: <textarea id={"address"} onChange={handleChange} rows="5" cols="20"/>
            </label>
            <button type={"submit"}>완료</button>     {/* type을 submit으로 했기 때문에 onSubmit이 인식이 됨.*/}
        </form>
    )
}

export default NameForm;