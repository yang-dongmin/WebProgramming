import { useState } from "react";
function SimpleForm() {
    const [name, setName] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
        alert(`입력된 이름: ${name}`);
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름: <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <button type="submit">제출</button>
        </form>
    );
}
export default SimpleForm;