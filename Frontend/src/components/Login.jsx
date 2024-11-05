import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';


function Login() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const onSubmit = async(data) => {

    const userInfo = {
      
      fullname : data.fullname,
      email: data.email,
      password : data.password

    }

  await  axios.post("https://bookauras6075.onrender.com/user/login", userInfo)
   .then((res)=>{
    console.log(res.data)
     if(res.data){

      toast.success("Loggedin successfully")
        
      localStorage.setItem("Users", JSON.stringify(res.data.user))

     }

   }).catch((err)=>{
     
    if(err.response){
      console.log(err)

      toast.error("Error" + err.response.data.message)
    }

 
   })
  }



  return (
    <>
    
    <div>


    <dialog id="my_modal_3" className="modal" >
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      onClick={()=>document.getElementById("my_model_3").closest()}
      >✕</Link>
    
    <h3 className="font-bold text-lg">Login</h3>
   
   {/* email */}
    <div className='mt-4 space-y-3'>

        <span>Email</span>
        <br />
        <input type="email"  placeholder='Enter email'
         className='w-80 border rounded-md px-4 outline-none'
         {...register("email", { required: true })}
         />
         <br/>
         {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
        <br />

    </div>

    {/* password */}

    <div className='mt-4 space-y-3'>

<span>Password</span>
<br />
<input type="text"  placeholder='Enter email' 
className='w-80 border rounded-md px-4 outline-none'
{...register("password", { required: true })}
/>
<br />
{errors.password && <span className='text-sm text-red-500'>This field is required</span>}
<br />

</div>

{/* Button */}

<div className='flex justify-around py-4 mr-40'>
    <button className='bg-pink-500 text-white rounded px-2'>Login</button>
    <p>Not registered ?<Link  to = '/signup' className='text-blue-500 pointer-cursor'>Signup</Link>
    {" "}
    </p>
</div>
</form>
  </div>
</dialog>
    </div>
    </>
  )
}

export default Login
