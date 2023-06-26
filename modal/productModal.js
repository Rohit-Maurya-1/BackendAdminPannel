const mongoose=require("mongoose");
const { array } = require("../imageUpload/multer");
const {ObjectId} =require("mongoose")
const {Schema,model}=mongoose;
const productSchma=new Schema({
      productName:{
      type:String,
      required:true  
    },
    price:{
        type:String,
        required: true
    },
    userdata:{ 
        type:mongoose.Schema.Types.ObjectId,
        ref:"userdata"
     },
    productDescription:{
        type:String,
        required:true 
    },
     productTitle:{
        type:String
    },
    productImage:{
       type:Array,
       validate:[arrayLimit,'you can be pass only 5 product images']
  }
})
function arrayLimit(val){
    return val.length<=5;
}
const addProduct=model("addProduct",productSchma)
module.exports=addProduct;