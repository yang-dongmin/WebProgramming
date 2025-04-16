import React, { useState, useMemo } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);
  const expensiveResult = useMemo(() => {
    console.log("계산 중...");
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += number;
    }
    return result;
  }, [number]); // `number`가 바뀔 때만 실행됨
  return (
    <div>
      <h1>useMemo를 사용하여 최적화</h1>
      <button onClick={() => setCount(count + 1)}>클릭: {count}</button>
      <h2>결과: {expensiveResult}</h2>
    </div>
  );
}
export default App;