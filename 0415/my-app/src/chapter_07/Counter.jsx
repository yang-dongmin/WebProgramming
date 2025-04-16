import { useRef, useState } from "react";
function Counter() {
    const countRef = useRef(0);
    const [renderCount, setRenderCount] = useState(0);
    const increment = () => {
        countRef.current += 1;
        console.log("Ref 값:", countRef.current);
    };
    return (
        <div>
            <p>렌더링 횟수: {renderCount}</p>
            <button onClick={() => setRenderCount(renderCount + 1)}>렌더 트리거</button>
            <button onClick={increment}>Ref 증가</button>
        </div>
    );
}
export default Counter;