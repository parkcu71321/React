import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Comment from "./chp05/exam01/Comment";
import reportWebVitals from "./reportWebVitals";
import BookList from "./chp05/exam2/Book.list";


const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(()=> {
    root.render(
        <React.StrictMode>
            <BookList/>
        </React.StrictMode>
    );
}, 1000)

reportWebVitals();