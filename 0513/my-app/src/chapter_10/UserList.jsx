function UserList() {
    const users = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" }
    ];
    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li> // ID를 key로 사용 (추천)
            ))}
        </ul>
    );
}
export default UserList;