const Button = ({ children, onClick, className, disabled }) => (
  <>
    <button
      disabled={disabled}
      className={`rounded py-1 px-3 ${className}`}
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
