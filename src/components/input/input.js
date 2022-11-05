export default function Input({ inputRef }) {
  return (
    <input className="form-control" type="text" ref={inputRef} required />
  )
}