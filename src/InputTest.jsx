import React, {useState} from "react";

function Input() {
    const[inputValue,setInputValue]=useState("");
    function handleChange(event) {
        setInputValue(event.target.value);
    }

    return (
        <div>
            <h2>입력해보세요</h2>
            <input
                type="text"
                onChange={handleChange}
            />
            <h2 id={"result"}>입력: {inputValue}</h2>
        </div>
    );
}

export default Input;
