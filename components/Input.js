const Input = ({ handleChange, type, placeholder, className = '' }) => {
  const onChange = e => {
    handleChange(e.target.value)
  }

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        autoComplete='off'
        className={`text-3xl bg-transparent w-96 ${className}`}
        onChange={onChange}
      />
      <style jsx>
        {`
          .bg-transparent {
            background-color: transparent !important;
          }

          input:focus {
            outline: none;
          }
        `}
      </style>
    </>
  )
}

export default Input
