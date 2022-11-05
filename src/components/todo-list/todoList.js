import SectionTitle from "../section-title/sectionTitle";
import TodoItem from "../todo-item/todoItem";

import "./todoList.css"

export default function TodoList({ todo, handleDeleteTodo, hendleChecked, hendleCheckedDelete, hendleEtide }) {
  return (
    <div className="mt-5">
      <SectionTitle>
        Todos
      </SectionTitle>

      <ul className="todo-list  mt-4">
        {
          todo.map(item => (
            <TodoItem  {...item} key={item.id} handleDeleteTodo={handleDeleteTodo} hendleChecked={hendleChecked} hendleEtide={hendleEtide} />))
        }
      </ul>

      <div className="text-end">
        <button className="btn btn-danger" type="button" onClick={hendleCheckedDelete} >Delete checked</button>
      </div>
    </div>
  )
}