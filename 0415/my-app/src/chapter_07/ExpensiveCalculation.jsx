import React, { useState } from "react";
function ExpensiveCalculation({ number }) {
    console.log("계산 중...");
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
        result += number;
    }
    return <h2>결과: {result}</h2>;
}
export default function App() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(1);
    return (
        <div>
            <h1>useMemo 없이 매번 계산</h1>
            <button onClick={() => setCount(count + 1)}>클릭: {count}</button>
            <ExpensiveCalculation number={number} />
        </div>
    );
}