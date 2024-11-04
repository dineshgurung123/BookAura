import User from "../model/user.model.js"
import bcrycptjs from "bcryptjs"

export const signup = async(req, res)=>{

    try {
           const {fullname, email, password} = req.body
         
          const user = await User.findOne({email})
          if(user){

            return  res.status(400).json({message:"user already exist"})
          }

          const hashPassword = await bcrycptjs.hash(password, 10)

       const createdUser = new User({
            fullname : fullname,
            email : email,
            password : hashPassword

       })
        await createdUser.save();
        res.status(201).json({message: "User created successfully"})

    } catch (error) {
        
        console.log(error.message)
        res.status(500).json({message : "internal server failure"})
    }


}