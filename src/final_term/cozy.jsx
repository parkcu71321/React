import React from 'react';
import './cozy.css';
import franceImg from './프랑스.jpeg';
import afterImg from './애프터.jpg';

function Cozy(props) {
    return (
        <div className="cozy-wrapper">

            <button
                onClick={() => props.onPageChange('main')}
                style={{
                    position: 'absolute', top: '30px', left: '30px',
                    padding: '10px 20px', cursor: 'pointer', fontWeight: 'bold',backgroundColor: '#F5DD5BFF',borderRadius: '10px',border:'0'
                }}
            >
                메인으로
            </button>

            <div className="title">
                <h1>Cozy Section</h1>
            </div>

            <div className="section1">
                <img src={franceImg} className="section-img" alt="La Planque" />
                <div className="text-box">
                    <a href="https://m.place.naver.com/restaurant/37755287/home" className="place-name">
                        La Planque
                    </a>
                    <ul>
                        <li>안락한 느낌의 조명</li>
                        <li>경험해보지 못 한 맛이지만 거부감 들지 않는 프랑스 가정식</li>
                    </ul>
                </div>
            </div>

            <div className="section2">
                <img src={afterImg} className="section-img" alt="After walk33" />
                <div className="text-box">
                    <a href="https://m.place.naver.com/restaurant/36877577/home" className="place-name">
                        After walk33
                    </a>
                    <ul>
                        <li>어둠 속의 밝게 빛나는 조명</li>
                        <li>조명 빛에 비춰진 환상적인 맛의 파스타</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cozy;