const express = require("express");
const connectDB=require("./config/database");
const app=express();
const User =require("./models/user");


app.use(express.json());
app.post("/signup",async (req,res)=>{
    console.log(req.body);
  const user =new User(req.body); 
    try{ 
        await user.save();
        res.send("User added successfully !!")
    }catch(err){
        res.status(400).send("Error saving the user")
    } 
   
})
 //Feed API -Get /feed - get all the users from the database  

 

connectDB().then(()=>{
    console.log("Database connection established");
    app.listen(7777,()=>{
    console.log("server is successfully listening on port 7777....");
}); 
})
.catch((err)=>{
    console.log("Database cannot be connected");
});


