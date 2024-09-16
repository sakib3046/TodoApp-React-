import React from 'react'

const Todo = () => {
  return (
    <>
    <div className="bg-white m-4 p-4 gap-4 flex flex-col rounded-xl place-self-center w-[30rem]">
      <h1 className='text-xl font-bold'>Todo App By React</h1>
      <div className="bg-slate-200 flex flex-row rounded-full">
        <input className='bg-transparent w-full outline-none py-2 pl-6 ' type="text" />
        <button className='bg-orange-500 rounded-full px-6 font-semibold text-white' type="submit">ADD+</button>
      </div>
    </div>
    </>
  )
}

export default Todo