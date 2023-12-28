import express from "express"
import helmet from "helmet"
import morgan from "morgan"
import dbConnect from "./config/db.js"
import router from "./routes/auth.js"
import cors from "cors"   
 
const app = express()  
app.use(express.json())
app.use(cors())
app.use(morgan("common"))
app.use(helmet())
app.use("/api/auth",router)
dbConnect()
 
app.get("/",(req,resp)=>{
    resp.json("Hello from Server")
})
app.listen(9000,()=>{
    console.log("Server started")
})