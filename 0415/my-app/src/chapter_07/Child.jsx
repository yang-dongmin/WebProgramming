// import React, { useState } from "react";
// function Child({ onClick }) {
//     console.log("Child 컴포넌트 렌더링됨");
//     return <button onClick={onClick}>버튼 클릭</button>;
// }
// export default function App() {
//     const [count, setCount] = useState(0);
//     const handleClick = () => {
//         console.log("버튼 클릭됨");
//     };
//     return (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={() => setCount(count + 1)}>카운트 증가</button>
//             <Child onClick={handleClick} />
//         </div>
//     );
// }

import React, { useState, useCallback } from "react";
function Child({ onClick }) {
console.log("Child 컴포넌트 렌더링됨");
return <button onClick={onClick}>버튼 클릭</button>;
}
export default function App() {
const [count, setCount] = useState(0);
// useCallback을 사용하여 함수 메모이제이션
const handleClick = useCallback(() => {
console.log("버튼 클릭됨");
}, []); // 의존성 배열이 비어 있으므로 처음 생성된 함수를 재사용
return (
<div>
<h1>Count: {count}</h1>
<button onClick={() => setCount(count + 1)}>카운트 증가</button>
<Child onClick={handleClick} />
</div>
)};