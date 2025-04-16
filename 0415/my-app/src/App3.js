import React, { useState, useCallback, useMemo } from "react";
export default function App3() {
    const [query, setQuery] = useState("");
    const [list] = useState(["Apple", "Banana", "Cherry", "Date"]);
    // useMemo로 리스트 필터링 최적화
    const filteredList = useMemo(() => {
        console.log("필터링 실행됨");
        return list.filter((item) =>
            item.toLowerCase().includes(query.toLowerCase()));
    }, [query, list]);
    // useCallback으로 이벤트 핸들러 최적화
    const handleChange = useCallback((e) => {
        setQuery(e.target.value);
    }, []);
    return (
        <div>
            <input type="text" value={query} onChange={handleChange}
                placeholder="검색어 입력" />
            <ul>
                {filteredList.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}