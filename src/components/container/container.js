import "./container.css"

export default function Container({ children }) {
  return (
    <div className="container mt-3">
      {children}
    </div>
  )
}