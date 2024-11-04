import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Cards from './Cards'

import {Link} from 'react-router-dom'
import axios from "axios"

function Course() {
 
 const [book , setBook] = useState([])

 useEffect(()=>{

const getBook = async ()=>{

try {
  
const res = await axios.get("http://localhost:4001/book")
console.log(res.data)
setBook(res.data)

} catch (error) {
  console.log(error)
}
}
getBook()

 },[])

  return (
   <>
   
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>

     <h1 className='text-2xl md:text-4xl mt-28 items-center justify-center text-center'>We're delighted to have you <span className='text-pink-500'>here!</span></h1>

     <p className='mt-12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, tenetur nemo sint dicta, reiciendis, voluptates excepturi sit odio molestias adipisci debitis labore neque eligendi sapiente id cupiditate consequatur ipsa? Numquam!</p>
     
     <Link to = '/'> 

     <button className=' bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-700 mt-10 ml-'>Back</button>

     </Link>

   </div>

   <div className='mt-20 grid grid-cols-1 md:grid-cols-3 gap-4'>
 
    {
           book.map((item)=>(

            <Cards key = {item.id} item={ item} />
           ))
      
    }   

   </div>
   
   </>
  )
}

export default Course
