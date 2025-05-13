import { useState } from "react";
function MultiInputForm() {
    const [formData, setFormData] = useState({ name: "", email: "" });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("입력된 데이터:", formData);
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름: <input type="text" name="name" value={formData.name}
                    onChange={handleChange} />
            </label>
            <br />
            <label>
                이메일: <input type="email" name="email" value={formData.email}
                    onChange={handleChange} />
            </label>
            <br />
            <button type="submit">제출</button>
        </form>
    );
}
export default MultiInputForm;