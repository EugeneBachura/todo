import React, { useState } from "react";
import TodoList from "./Todo/TodoList";
import Context from "./Context";
import AddTodo from "./Todo/AddTodo";

function App() {
  let [todos, setTodos] = useState([
    { id: 1, completed: false, title: "Купить молоко" },
    { id: 2, completed: true, title: "Купить яблоки" },
    { id: 3, completed: false, title: "Купить картошку" },
  ]);

  function changeTodoItem(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      })
    );
  }

  function removeTodoItem(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function onCreateItem(title) {
    setTodos(
      todos.concat([
        {
          id: todos.length + 1,
          completed: false,
          title: title,
        },
      ])
    );
    console.log(todos);
  }

  return (
    <Context.Provider value={{ removeTodoItem: removeTodoItem }}>
      <div className="Todo">
        <header className="header">
          <h1>ToDo List</h1>
        </header>
        {todos.length !== 0 ? (
          <TodoList todos={todos} changeTodoItem={changeTodoItem} />
        ) : (
          <p>Нет задач</p>
        )}
        <AddTodo onCreateItem={onCreateItem} />
      </div>
    </Context.Provider>
  );
}

export default App;
