export default function CheckBox({ hendleChecked, id, isComplited }) {
  return (
    <input className="form-check-input" type="checkbox" onChange={() => hendleChecked(id)} checked={isComplited} />
  )
}