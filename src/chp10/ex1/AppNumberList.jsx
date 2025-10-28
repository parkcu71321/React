import React from "react";

function AppNumberList(){
    const numbers=[1,2,3,4,5];      //numbers라는 이름의 상수를 만들고 그 안에 리스트 값을 넣음.
    return(
        <div>
            <h1>숫자 리스트</h1>
            <NumberList numbers={numbers}></NumberList>
        </div>
    );
}

function NumberList(props){         //AppNumberList에 사용
    const newNumbers=props.numbers;        //props 안에는 속성값 numbers, 대입값 리스트. 결국 numbers에 props 안에 있는 numbers의 값을 newNumbers 대입함
    const listItems=newNumbers.map((number)=>       //map() - 원본 배열은 놔두고 새로운 배열을 생성함.
        <li key={number}>{number}</li>   //li - 목록 안에 항목을 나타냄. ul이나 ol 안에 사용.
    );
    return(
        <ul>    {/* ul - 순서 없는 목록. 점으로 표시*/}
            {listItems}
        </ul>
    )
}

export default AppNumberList;