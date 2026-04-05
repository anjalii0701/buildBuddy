const mongoose = require("mongoose");
const validator=require("validator");

const userSchema= new mongoose.Schema({
    firstName:  {
        type: String,
        required:true,
        minLength:3,
        maxLength:50,
    },
    lastName: {
        type: String
    } ,
    emailId: {
        type: String,
        required:true,
        lowercase:true,
        unique:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email address"+ value);
            }
        }


    },
    password: {
        type: String,
        required:true, 
    },
    age:{
        type: Number,
        min:18,
    },
    gender:{
        type: String,
        validate(value){
            if(!["male" ,"female","other"].includes(value)){
                throw new Error("Gender data is not valid")
            }
        }
    },
    photoUrl:{
        type:String
    },
    skills:{
        type:[String ]  
    },
    about:{
        type:String ,
        default:"This is default about the user"
    }
},{
    timestamps:true,
}
);
  
module.exports=mongoose.model("User",userSchema);