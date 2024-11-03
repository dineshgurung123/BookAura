import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";


function Signup() {
 
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const onSubmit = data => console.log(data);
 
  return (
  <>
  
  <div className='flex h-screen items-center justify-center '>

<div id="my_modal_3" className=" ">
<div className="modal-box ">
<form method="dialog "  onSubmit= {handleSubmit(onSubmit)}>
  {/* if there is a button in form, it will close the modal */}
  <Link to ='/'className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

<h3 className="font-bold text-lg">Signup</h3>

{/* name */}
<div className='mt-6 space-y-3'>

  <span>Name</span>
    <br />
     <input type="text"  placeholder='Enter full name'  className='w-80 border rounded-md px-4 outline-none'
       {...register("name", { required: true })} />  
    
    <br />
    {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
    <br />

</div>

{/* email */}
<div className='mt-4 space-y-3'>

    <span>Email</span>
    <br />
    <input type="email"  placeholder='Enter email' className='w-80 border rounded-md px-4 outline-none'
        {...register("email", { required: true })} />

    <br />
    {errors.email && <span className='text-sm text-red-500'>This field is required</span>}

</div>

{/* password */}

<div className='mt-4 space-y-3'>

<span>Password</span>
<br />
<input type="text"  placeholder='Enter password' className='w-80 border rounded-md px-4 outline-none'
   {...register("password", { required: true })} 
/>
<br />

{errors.password && <span className='text-sm text-red-500'>This field is required</span>}


</div>

{/* Button */}

<div className='flex items-center mt-4 '>
<button className='bg-pink-500 text-white rounded px-2 py-1 hover:bg-pink-800 duration-200'>signup</button>
<p  className='ml-6'>Have account ?{" "}
    
<Link to="/" className='underline text-blue-600 cursor-pointer '>login</Link>
{" "}

</p>
</div>
</form>
</div>
</div>
</div>
  
  </>
  )
}

export default Signup
