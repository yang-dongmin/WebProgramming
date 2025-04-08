// // import Counter1 from "./chapter_07/Count1";
// // import Counter2 from "./chapter_07/Count2";

// // function App() {
// //   return (
// //     <div className="App">
// //       <Counter1 />
// //       <Counter2 />
// //     </div>
// //   );
// // }
// // export default App;

// // import { useState } from 'react';
// // export default function Counter() {
// //   const [number, setNumber] = useState(0);
// //   return (
// //     <>
// //       <h1>{number}</h1>
// //       <button onClick={() => {
// //         setNumber(number => number + 1);
// //         console.log(number)
// //         setNumber(number => number + 2);
// //         console.log(number)
// //         setNumber(number => number + 3);
// //         console.log(number)
// //       }}>+3</button>
// //     </>
// //   )
// // }

// import Area from './chapter_07/Area';

// function App(){
//   return(
//     <div>
//       <Area />
//     </div>
//   );
// };
// export default App;

import { useState } from 'react';
import AddTodo from '../src/chapter_07/AddTodo.js';
import TaskList from '../src/chapter_07/TakeList.js';
let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];
export default function TaskApp() {
  const [todos, setTodos] = useState(initialTodos);
  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false
      }
    ]);
  }
  function handleChangeTodo(nextTodo) {
    setTodos(todos.map(t => {
      if (t.id === nextTodo.id) {
        return nextTodo;
      } else {
        return t;
      }
    }));
  }
  function handleDeleteTodo(todoId) {
    setTodos(
      todos.filter(t => t.id !== todoId)
    );
  }
  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}