const Button = ({ children, onClick, className }) => (
  <button
    className={`py-1 rounded px-3 bg-hot-pink-100 hover:bg-pink-100 ${className}`}
    onClick={onClick}>
    {children}
  </button>
)

export default Button
