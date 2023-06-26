const mongoose=require("mongoose");
const {Schema,model}=mongoose;
const registerSchma=new Schema({
 
    name:{
      type:String,
      required:true  
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true 
    },
    // avatar:{
    //     type:String
    // }
})
const userRegister=model("userdata",registerSchma)
module.exports=userRegister;