const mongoose =require('mongoose');
const connectDB= async()=>{
   await   mongoose.connect("mongodb+srv://namastenode:uAJWD1iJEwyTAUt1@namastenode.ohzrwbz.mongodb.net/devTinder"
    )
};

module.exports = connectDB;