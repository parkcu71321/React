import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from "./chp03/Library";
import "./chp03/Book.css";
import "./chp04/Button.css"
import "./chp04/ConfirmDialogs.css"
import ConfirmDialogs from "./chp04/ConfirmDialogs";

import Clock from "./chp04/Clock";
import "./chp04/clock.css"

const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(()=>{       //중괄호 안은 1초마다 반복하고 싶은 거 적기
    root.render(
        <React.StrictMode>
            <Clock />
        </React.StrictMode>
    );
}, 1000)        //, 후는 반복 주기


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
