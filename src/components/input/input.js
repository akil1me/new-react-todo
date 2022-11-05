export default function Input({ value, setValue }) {
  return (
    <input className="form-control" type="text" value={value} onChange={(e) => setValue(e.target.value)} required />
  )
}