import React from "react";
import "./Book.css"
import Book from "./Book"
const books = [
    {
        title:"Crazy",
        author: '막스 베르스타펜',
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFCpqyCq3uQz3ZhbJDVwRRbMP2m5fNgJ6Hiw&s"},
    {
        title:"Goat",
        author: '샤를 르끌레르',
        coverImage:"https://i.pinimg.com/736x/e5/f1/1a/e5f11a98a8acf63297e844631071d5b4.jpg" }
]

function BookList(){
    return(
        <div className={"bookListWrapper"}>
            {
                books.map((book)=>{
                    return(
                        <Book
                            title={book.title}
                            author={book.author}
                            coverImage={book.coverImage}

                        />
                    )
                })
            }
        </div>
    )
}

export default BookList;