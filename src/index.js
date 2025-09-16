import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from "./reportWebVitals";
import CommentList from "./chp05/CommentList";

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <React.StrictMode>
        <CommentList/>
    </React.StrictMode>
);
reportWebVitals();