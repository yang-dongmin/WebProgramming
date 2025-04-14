import React from 'react';
import './main.css';

function Main({ setPage }) {
  return (
    <div className="main">
      <div className='main-QA' onClick={() => setPage('question')}>
        Q
      </div>
      <div className='main-QA' onClick={() => setPage('answer')}>
        A
      </div>
    </div>
  );
}

export default Main;
