import { useState } from "react";
function AdvancedForm() {
    const [form, setForm] = useState({
        username: "",
        gender: "male",
        agree: false,
    });
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("폼 데이터:", form);
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름: <input type="text" name="username"
                    value={form.username} onChange={handleChange} />
            </label>
            <br />
            <label>
                성별:
                <select name="gender" value={form.gender}
                    onChange={handleChange}>
                    <option value="male">남성</option>
                    <option value="female">여성</option>
                </select>
            </label>
            <br />
            <label>
                동의: <input type="checkbox" name="agree"
                    checked={form.agree} onChange={handleChange} />
            </label>
            <br />
            <button type="submit">제출</button>
        </form>
    );
}
export default AdvancedForm;