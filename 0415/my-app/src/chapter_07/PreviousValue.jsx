import { useRef, useEffect, useState } from "react";
function PreviousValue() {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef();
    useEffect(() => {
        prevCountRef.current = count;
    }, [count]);
    return (
        <div>
            <p>현재 값: {count}</p>
            <p>이전 값: {prevCountRef.current}</p>
            <button onClick={() => setCount(count + 1)}>증가</button>
        </div>
    );
}
export default PreviousValue;