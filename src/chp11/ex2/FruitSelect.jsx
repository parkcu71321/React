import React, {useState} from "react";
import "./FruitSelct.css";

function FruitSelect(){
    const[value,setValue]=useState('단감');

    const handleChange=(event)=>{
       setValue(event.target.value);
    }

    const handleSubmit=(event)=>{
        alert("선택된 과일: "+ value);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
            과일을 선택하세요:
                <select  value={value} onChange={handleChange}>
                    <option value="단감">단감</option>
                    <option value="수박">수박</option>
                    <option value="귤">귤</option>
                    <option value="복숭아">복숭아</option>
                </select>
            </label>
            <button type={"submit"}>완료</button>
        </form>
    )
}

export default FruitSelect;