import React from 'react';
import './App.css';
import News from './page/News'; // News 컴포넌트를 임포트합니다.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <News />  // 뉴스 컴포넌트를 사용합니다.
      </header>
    </div>
  );
}

export default App;
