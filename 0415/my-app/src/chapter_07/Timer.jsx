import React, { useEffect }from "react";
function Timer() {
    useEffect(() => {
        const interval = setInterval(() => {
            console.log("1초마다 실행");
        }, 1000);
        return () => {
            console.log("타이머 정리");
            clearInterval(interval);
        };
    }, []);
    return <h1>타이머 실행 중...</h1>;
}
export default Timer;