import React, {useEffect, useState} from "react";
//useState 훅을 사용하여 상태 설정이 변경될 때마다 렌덩링 되게

function Counter() {
    // var count=0;
    //
    // return(
    //     <div>
    //         <p>총 {count}번 클릭 했습니다.</p>
    //         <button onClick={()=>count++}>클릭</button>
    //     </div>
    // );

     const[count,setCount]=useState(0);      //count 상자 안 숫자, setCount 상자 안 숫자를 바뀔 때 사용하는 버튼
    //
    // return(
    //     <div>
    //         <p>총 {count}번 클릭 했습니다.</p>
    //         <button onClick={()=>setCount(count+1)}>클릭</button>
    //     </div>
    // );

    useEffect(()=>{         //특정 일이 일어날 때 동작
        document.title="총 {count}번 클릭"
        return ()=> {}
    });

    return(
        <div>
            <p>총 {count}번 클릭 했습니다.</p>
            <button onClick={()=>setCount(count+1)}>클릭</button>
        </div>
    )
}

export default Counter;