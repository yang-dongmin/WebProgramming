import React, { useState } from 'react';

function ChildA() {
    const [text, setText] = useState("");
    return (
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <p>입력 값: {text}</p>
        </div>
    );
}
function ChildB() {
    const [text, setText] = useState("");
    return (
        <div>
            <p>ChildA와 같은 데이터를 보여줘야 하지만,
                현재 별도 상태 관리 중: {text}</p>
        </div>
    );
}
function Parent1() {
    return (
        <div>
            <ChildA />
            <ChildB />
        </div>
    );
}
export default Parent1;