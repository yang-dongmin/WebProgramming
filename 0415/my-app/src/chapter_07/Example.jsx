import React, { useEffect } from "react";
function Example() {
    useEffect(() => {
        console.log("컴포넌트가 마운트됨!");
    }, []); // 빈 배열 → 한 번만 실행
    return <h1>useEffect 예제</h1>;
}
export default Example;