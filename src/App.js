import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

import { AddTodo } from "./components/add-todo/addTodo";
import Container from "./components/container/container";
import TodoList from "./components/todo-list/todoList";

function App() {
  const getTodo = JSON.parse(localStorage.getItem("todo"));

  const startTodo = [
    { id: 1, title: "Assalomu aleykum", isComplited: false, edite: false },
    { id: 2, title: "ಥ_ಥ", isComplited: false, edite: false }
  ]

  const inputRef = useRef();

  const [todo, setTodo] = useState(
    getTodo || [...startTodo]
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      title: inputRef.current.value,
      isComplited: false,
      etite: false
    }

    setTodo([...todo, newTodo]);
    localStorage.setItem("todo", JSON.stringify(todo))
    inputRef.current.value = "";
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

  const hendleEtide = (id) => {
    const newTodo = todo.map(item => {
      if (item.id == id) {
        item.edite = !item.edite;
      }
      return item;
    })
    setTodo(newTodo);
  }

  return (
    <Container>
      <AddTodo inputRef={inputRef} handleSubmit={handleSubmit} />
      <TodoList todo={todo} handleDeleteTodo={handleDeleteTodo} hendleChecked={hendleChecked} hendleCheckedDelete={hendleCheckedDelete} hendleEtide={hendleEtide} />
    </Container>
  );
}

export default App;
