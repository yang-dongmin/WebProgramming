import { useState } from "react";
function Parent2() {
    const [text, setText] = useState("");
    return (
        <div>
            <ChildA text={text} setText={setText}
            />
            <ChildB text={text} />
        </div>
    );
}
function ChildA({ text, setText }) {
    return (
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <p>입력 값: {text}</p>
        </div>
    );
}
function ChildB({ text }) {
    return (
        <div>
            <p>ChildA에서 입력한 값: {text}</p>
        </div>
    );
}
export default Parent2;