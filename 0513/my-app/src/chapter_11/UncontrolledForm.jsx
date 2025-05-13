import { useRef } from "react";
function UncontrolledForm() {
    const inputRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`입력된 값: ${inputRef.current.value}`);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} />
            <button type="submit">제출</button>
        </form>
    );
}
export default UncontrolledForm;