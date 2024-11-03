import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
  <>
  
  <div className='flex h-screen items-center justify-center '>

<div id="my_modal_3" className=" ">
<div className="modal-box ">
<form method="dialog ">
  {/* if there is a button in form, it will close the modal */}
  <Link to ='/'className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
</form>
<h3 className="font-bold text-lg">Signup</h3>

{/* name */}
<div className='mt-4space-y-3'>

    <span>Name</span>
    <br />
    <input type="text"  placeholder='Enter  name' className='w-80 border rounded-md px-4 outline-none'/>
    <br />

</div>

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
<input type="text"  placeholder='Enter password' className='w-80 border rounded-md px-4 outline-none'/>
<br />

</div>

{/* Button */}

<div className='flex items-center mt-4 '>
<button className='bg-pink-500 text-white rounded px-2 py-1 hover:bg-pink-800 duration-200'>signup</button>
<p  className='ml-6'>Have account ?{" "}
    
<Link to="/" className='underline text-blue-600 cursor-pointer '>login</Link>
{" "}

</p>
</div>

</div>
</div>
</div>
  
  </>
  )
}

export default Signup
