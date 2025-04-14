import React from 'react';

function Header({ setPage }) {
  return (
    <div style={{paddingBottom: '30px'}}>
      <header style={{ padding: '15px', textAlign: 'center' }} onClick={() => setPage('main')}>
        <h1>익명 상담소</h1>
      </header>
      <hr></hr>
    </div>
  );
}


export default Header;
