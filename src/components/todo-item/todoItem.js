import CheckBox from "../checkbox/checkbox";
import DeleteButton from "../delete-button/deliteButton";

export default function TodoItem({ title, id, isComplited, handleDeleteTodo, hendleChecked, hendleEtide }) {

  return (
    <>
      <li className="card mb-3 p-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center ">
            <CheckBox hendleChecked={hendleChecked} id={id} isComplited={isComplited} />

            <span className={`ms-3 ${isComplited ? "text-decoration-line-through text-danger" : "text-decoration-none"}`}>{title}</span>

          </div>

          <div>

            <DeleteButton handleDeleteTodo={handleDeleteTodo} id={id} />
          </div>
        </div>
      </li>
    </>
  )
}