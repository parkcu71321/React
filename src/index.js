import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from "./reportWebVitals";
import CommentList from "./chp05/CommentList";
import NotificationList from "./chp06/NotificationList";
import Counter from "./chp07/exam1/Counter";
import Accomodate from "./chp07/exam1/Accomodate";
import Toggle from "./chp08/Toggle";
import MyButton_Arguments from "./chp08/MyButton_Arguments";
import InputTest from "./InputTest";

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <React.StrictMode>
        <InputTest/>
    </React.StrictMode>
);
reportWebVitals();