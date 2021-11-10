const Input = ({
  handleChange,
  handleKeyPress,
  type,
  placeholder,
  className = ''
}) => {
  const onChange = e => {
    handleChange(e.target.value)
  }

  const onKeyPress = e => {
    handleKeyPress(e)
  }

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        autoComplete='off'
        className={`text-3xl bg-transparent w-96 ${className}`}
        onChange={onChange}
        onKeyPress={onKeyPress}
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
