function NameList() {
    const names = ["Alice", "Bob", "Charlie"];
    return (
        <ul>
            {names.map((name, index) => (
                <li key={index}>{name}</li> // index를 key로 사용 (비추천)
            ))}
        </ul>
    );
}
export default NameList;