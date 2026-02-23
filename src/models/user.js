const mongoose = require("mongoose");

const userSchema= new mongoose.Schema({
    firstName:  {
        type: String
    },
    lastName: {
        type: String
    } ,
    emailId: {
        type: String
    },
    password: {
        type: String
    },
    // age:{
    //     type: Number
    // },
    // gender:{
    //     type: String
    // },
    // photoUrl:{
    //     type:String
    // },
    // skills:{
    //     type:[String ]
    // },
    // about:{
    //     type:String ,
    //     default:"This is default about the user"
    // }
});
  
module.exports=mongoose.model("User",userSchema);