import Book from "./Book";
import React from "react";

function Library(props){
    return(
        <div>
            <Book name="처음 만난 리액트" totalPage={300}/>
            <Book name="처음 만난 Neflix" totalPage={200}/>
            <Book name="처음 만난 Coupang" totalPage={400}/>
        </div>
    )
}

export default Library;