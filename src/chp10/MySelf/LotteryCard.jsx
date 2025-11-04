import React from "react";
import './LotteryCard.css';
import loseImg from './img/꽝.png';
import winImg from './img/대박.png';

const lotteries = [
    { id: 1, result: "꽝", img: loseImg },
    { id: 2, result: "대박", img: winImg },
    { id: 3, result: "꽝", img: loseImg },
    { id: 4, result: "대박", img: winImg },
    { id: 5, result: "꽝", img: loseImg },
    { id: 6, result: "대박", img: winImg },
];

function LotteryCard() {
    return (
        <div className="lottery-container">
            <h2 className="lottery-title">🎟️ 오늘의 복권</h2>
            <div className="lottery-grid">
                {lotteries.map(lotto => (
                    <div className="lottery-card" key={lotto.id}>
                        <div className="lottery-front">
                            <h3>{lotto.result}</h3>
                        </div>
                        <div
                            className="lottery-back"
                            style={{ backgroundImage: `url(${lotto.img})` }}
                        ></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LotteryCard;
