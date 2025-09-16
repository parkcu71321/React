import React from "react";
import Comment from "./Comment"

const comments=[{
        name:"Skr",
        comment:"SkrSkrSKr",
        url:"https://edgio.clien.net/F01/7239171/12dee3da7fc002.jpg?scale=width:740"
    },
    {
        name:"Skrr",
        comment:"스쿱",
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVo940nFntCMzp-MdtynAZZQrBsXuoLvHiaQ&s"
    },
    {
        name:"Skrrrrrrrrrrr",
        comment:"스꾸삐",
        url:"https://mblogthumb-phinf.pstatic.net/MjAyNTAyMDhfMTQ2/MDAxNzM4OTUwMzIwMzY5.hIxiYoI2VQn3mw79Gg0J04xofx_ORPGKaHRhS0T7PMMg.8oaC2YZuDJ312ri3dECSOWExwpt7e2wrQpUiiCpKVYgg.JPEG/image.JPEG?type=w800"
    }
];


    function CommentList() {
        return(
            <div>
                {
                    comments.map((comment)=>{
                        return(
                            <Comment name={comment.name} comment={comment.comment} url={comment.url}/>
                        );
                    })
                }
            </div>
        );
    }

export default CommentList;


