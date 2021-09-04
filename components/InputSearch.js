const InputSearch = ({ handleSearch }) => {
  const onChange = e => {
    handleSearch(e.target.value)
  }

  return (
    <>
      <input
        id='inputSearch'
        type='search'
        placeholder='Search a city'
        autoComplete='off'
        className='w-96 text-3xl text-black-25 bg-transparent border-b-2 border-white-75'
        type='text'
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

export default InputSearch
