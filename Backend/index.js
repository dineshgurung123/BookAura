
import cors from "cors"
import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import  bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"


const app = express()
app.use(cors())

dotenv.config()

const port =  process.env.PORT|| 4000

app.use(express.json())


//connect to moongoDB


try {
    mongoose.connect(process.env.MongoDBURI)
    console.log("Database connected")

}


catch (error) {
    
    console.log("Error", error)
}

// Defining Routes

app.use("/book", bookRoute)
app.use("/user", userRoute)


app.listen(port, ()=>{

    console.log(`App listening on port ${port}`)
})