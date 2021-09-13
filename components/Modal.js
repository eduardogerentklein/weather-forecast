import { User } from 'react-feather'

const Modal = ({ children, title, description, show, actionButtons }) => {
  return (
    <>
      {show && (
        <div className='fixed z-10 inset-0 overflow-y-auto' role='dialog'>
          <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
            <div className='fixed inset-0 bg-black-25 bg-opacity-50 transition-opacity'></div>
            <span className='hidden sm:inline-block sm:align-middle sm:h-screen'>
              &#8203;
            </span>

            <div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
              <div className='bg-white-100 px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                <div className='sm:flex sm:items-start'>
                  <div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-25 sm:mx-0 sm:h-10 sm:w-10'>
                    <User size={24} className='text-white-100' />
                  </div>
                  <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                    <h3 className='text-lg leading-6 font-medium text-gray-900'>
                      {title}
                    </h3>
                    <div className='mt-2'>
                      <p className='text-sm text-gray-500'>{description}</p>
                    </div>
                    <div className='md:mt-2'>{children}</div>
                  </div>
                </div>
              </div>
              <div className='bg-black-25 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                {actionButtons}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
