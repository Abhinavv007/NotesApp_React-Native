import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
const dbConnect = async()=>{
    const connect = await mongoose.connect(process.env.MONGO_URL)
    if(connect){
        console.log("Database Connected Successfully")
     
    } else{
        console.log("Database failed to Connect")
    }
}
export default dbConnect