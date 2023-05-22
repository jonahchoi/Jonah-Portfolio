import React from 'react'

interface PopupProps {
  resetForm: () => void;
}

const Popup = ({ resetForm }: PopupProps) => {
  return (
    <div
      className='w-[90%] md:w-[50%] xl:w-[25%] flex flex-col justify-start items-start gap-2 p-[10px] border border-[#808080] rounded-3'
    >
      <h2 className='text-2xl text-secondary-color'>Message sent!</h2>

      <p>Thanks for reaching out :&#41; I&apos;ll be sure to get back to you ASAP. Have a great day!</p>
      <button
        className='self-end border border-secondary-color text-secondary-color font-bold py-[10px] px-[30px] relative z-10 overflow-hidden
        after:content-[" "] after:bg-secondary-color after:w-full after:h-full after:absolute after:top-0 after:left-0 after:z-[-1] after:-translate-x-full hover:text-white hover:after:translate-x-0 after:transition-transform after:duration-300 active:after:bg-blue-800'
        onClick={resetForm}
      >Send another</button>
    </div>
  )
}

export default Popup
