import { useEffect } from "react";
import { useState } from "react";

import { AddTodo } from "./components/add-todo/addTodo";
import Container from "./components/container/container";
import TodoList from "./components/todo-list/todoList";

function App() {
  const getTodo = JSON.parse(localStorage.getItem("todo"))

  const [value, setValue] = useState("");
  const [todo, setTodo] = useState(getTodo || [
    { id: 1, title: "Salom dunyo", isComplited: false }
  ]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      title: value,
      isComplited: false,
    }

    setTodo([...todo, newTodo]);
    localStorage.setItem("todo", JSON.stringify(todo))
    setValue("")
  }

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo))
  }, [todo])

  const handleDeleteTodo = (id) => {
    const newTodo = todo.filter(item => item.id !== id);
    setTodo(newTodo);
  }


  const hendleChecked = (id) => {
    const newTodo = todo.map(item => {
      if (item.id == id) {
        item.isComplited = !item.isComplited;
      }
      return item;
    })

    setTodo(newTodo);

  }

  const hendleCheckedDelete = () => {
    const newTodo = todo.filter(item => item.isComplited == false);
    setTodo(newTodo);

  }

  return (
    <Container>
      <AddTodo setValue={setValue} value={value} handleSubmit={handleSubmit} />
      <TodoList todo={todo} handleDeleteTodo={handleDeleteTodo} hendleChecked={hendleChecked} hendleCheckedDelete={hendleCheckedDelete} />
    </Container>
  );
}

export default App;
