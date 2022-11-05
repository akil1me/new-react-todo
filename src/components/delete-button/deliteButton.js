export default function DeliteButton({ handleDeleteTodo, id }) {
  return <button className="btn btn-close" type={"button"} onClick={() => handleDeleteTodo(id)}></button>
}