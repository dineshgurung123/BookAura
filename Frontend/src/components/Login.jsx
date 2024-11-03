import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
    
    <div>


    <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Login</h3>
   
   {/* email */}
    <div className='mt-4 space-y-3'>

        <span>Email</span>
        <br />
        <input type="email"  placeholder='Enter email' className='w-80 border rounded-md px-4 outline-none'/>
        <br />

    </div>

    {/* password */}

    <div className='mt-4 space-y-3'>

<span>Password</span>
<br />
<input type="text"  placeholder='Enter email' className='w-80 border rounded-md px-4 outline-none'/>
<br />

</div>

{/* Button */}

<div className='flex justify-around py-4 mr-40'>
    <button className='bg-pink-500 text-white rounded px-2'>Login</button>
    <p>Not registered ?<Link  to = '/signup' className='text-blue-500 pointer-cursor'>Signup</Link>
    {" "}
    </p>
</div>

  </div>
</dialog>
    </div>
    </>
  )
}

export default Login
