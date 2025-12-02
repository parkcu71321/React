import React from 'react';
import './hip.css';
import pizzaImg from './pizza.jpeg';
import trilogyImg from "./트릴로지'.jpg";

function Hip(props) {
    return (
        <div className="hip-wrapper">

            <button
                onClick={() => props.onPageChange('main')}
                style={{
                    position: 'absolute', top: '30px', left: '30px',
                    padding: '10px 20px', cursor: 'pointer', fontWeight: 'bold',backgroundColor: '#EF4174FF',borderRadius: '10px',border:'0'
                }}
            >
                메인으로
            </button>

            <div className="title">
                <h1>Hip Section</h1>
            </div>

            <div className="section1">
                <img src={pizzaImg} className="section-img" alt="Maddux Pizza" />
                <div className="text-box">
                    <a
                        href="https://m.place.naver.com/restaurant/36297977/home" className="place-name"
                    >
                        Maddux Pizza
                    </a>
                    <ul>
                        <li>힙한 노래</li>
                        <li>미국 스트릿에서 먹을법한 피자</li>
                    </ul>
                </div>
            </div>

            {/* --- Section 2 --- */}
            <div className="section2">
                <img src={trilogyImg} className="section-img" alt="Trillogy" />
                <div className="text-box">
                    <a
                        href="https://m.place.naver.com/restaurant/1128673675/home"  className="place-name"
                    >
                        Trillogy
                    </a>
                    <ul>
                        <li>힙한 노래 + 디제잉</li>
                        <li>해리포터 배경의 불의 잔을 방불케한 칵테일</li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Hip;
