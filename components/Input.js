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
            -webkit-text-stroke-width: none !important;
          }

          input {
            border-radius: 0;
          }

          input[type='search'] {
            -webkit-appearance: none;
          }
        `}
      </style>
    </>
  )
}

export default Input
