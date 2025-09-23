import React, {useState} from "react";
//useState 훅을 사용하여 상태 설정이 변경될 때마다 렌덩링 되게

function Counter() {
    // var count=0;
    //
    // return(
    //     <div>
    //         <p>총 {count}번 클릭 했습니다.</p>
    //         <button onClick={()=>count++}>클릭</button>
    //         </div>
    // );

    const[count,setCount]=useState(0);

    return(
        <div>
            <p>총 {count}번 클릭 했습니다.</p>
            <button onClick={()=>setCount(count+1)}>클릭</button>
        </div>
    );
}

export default Counter;