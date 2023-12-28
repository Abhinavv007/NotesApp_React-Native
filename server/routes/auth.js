import express from "express"
import userModel from "../models/UserModel.js"
import notesModel from "../models/NotesModel.js"
const router = express.Router()

router.get("/getnotes",async(req,resp)=>{
  const allNotes = await notesModel.find({})
  if(allNotes){
      resp.json({msg:allNotes})
  } else{
      resp.json({msg:"No Notes found"})

  }
})

router.post('/login',async(req,resp)=>{
    const {email,password} = req.body
    if(email&&password){
      const check = await userModel.findOne({email})
      if(check && check.password===password ){
        resp.json({msg:"Login Successfully Done"})

      } else{
        resp.json({msg:"Incorrect email or password"})
      }
    } else{
        resp.json({msg:"All fields are required"})
    }
})

router.post('/register',async(req,resp)=>{
    const {name,email,password} = req.body
    if(email&&name&&password){
       const check = await userModel.findOne({email})
       if(!check){
         const newUser = new userModel({name,email,password})
         const result = await newUser.save()
        resp.json({msg:"Registered Successfully"})
         
       } else{
        resp.json({msg:"User already exists"})

       }
    } else{
        resp.json({msg:"All fields are required"})
    }
    })

    router.post("/add-note",async(req,resp)=>{
      const {title,description} = req.body
      if(title && description){
  const newNote = new notesModel({title,description})
  const result = await newNote.save()
    resp.json({msg:"Note Added Successfully"})
      } else{
        resp.json({msg:"Please fill all respective fields"})
      }
    })

    router.delete("/delete-note/:id",async(req,resp)=>{
        const {id} = req.params
     
        const note = await notesModel.findByIdAndDelete(id)
        resp.json({ msg: "Note deleted successfully" });
       
    })

    router.put("/update-note/:id",async(req,resp)=>{
        const {id} =req.params
        const{title,description} = req.body
      const note = await notesModel.findByIdAndUpdate(id,{
        title,
        description
      },{new:true})
      const result = await note.save()
      resp.json({msg:"Note Updated Successfully"})
    })
    
export default router