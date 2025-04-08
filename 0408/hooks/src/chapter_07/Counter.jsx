function Counter(props) {
    var count = 0;
    return (
    <div>
    <p>총 {count} 번 클릭했습니다.</p>
    <button onClick={() => console.log(count++)}>
    클릭
    </button>
    </div>
    );
    }
    export default Counter;