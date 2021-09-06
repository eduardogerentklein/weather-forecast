const Button = ({ children, onClick, className, disabled }) => (
  <>
    <button
      disabled={disabled}
      className={`py-1 rounded px-3 bg-hot-pink-100 hover:bg-pink-100 ${className}`}
      onClick={onClick}>
      {children}
    </button>
    <style jsx>
      {`
        button:disabled {
          background-color: rgba(212, 113, 156, var(--tw-bg-opacity));
          cursor: default;
        }
      `}
    </style>
  </>
)

export default Button
