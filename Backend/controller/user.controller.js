import User from "../model/user.model.js"


export const signup = async(req, res)=>{

    try {
           const {fullname, email, password} = req.body
         
          const user = await User.findOne({email})
          if(user){

            return  res.status(400).json({message:"user already exist"})
          }

       const createdUser = new User({
            fullname,
            email,
            password

       })
        await createdUser.save();
        res.status(201).json({message: "User created successfully"})

    } catch (error) {
        
        console.log(error.message)
        res.status(500).json({message : "internal server failure"})
    }


}