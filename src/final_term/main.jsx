import React from 'react';
import './main.css';
import searchImg from './search.webp';
import cozyImg from './cozy.avif';
import hipImg from './hiprest.avif';

function Main(props) {

    return (
        <>
            <div className="header">
                <div className="headline">
                    <input type="text" className="input" placeholder="어느 분위기를 찾으시나요?" />
                    <a href="#">
                        <img src={searchImg} alt="search" className="image" />
                    </a>
                </div>
            </div>

            <div className="cozyback">
                <div onClick={() => props.onPageChange('cozy')} style={{cursor: 'pointer'}}>
                    <img src={cozyImg} alt="cozy" className="cozy" />
                </div>
                <div className="text1">
                   <span onClick={() => props.onPageChange('cozy')} style={{cursor: 'pointer'}}>
                       Cozy
                   </span>
                </div>
            </div>

            <div className="hipback">
                <div onClick={() => props.onPageChange('hip')} style={{cursor: 'pointer'}}>
                    <img src={hipImg} alt="hip" className="hip" />
                </div>
                <div className="text2">
                   <span onClick={() => props.onPageChange('hip')} style={{cursor: 'pointer'}}>
                       Hip
                   </span>
                </div>
            </div>
        </>
    );
}

export default Main;