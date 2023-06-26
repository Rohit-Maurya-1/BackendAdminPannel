const addProduct= require("../modal/productModal")
const {responce}= require("../constant/responce")
module.exports.addProduct = async (req, res, next) => {
   try {
      const {productName,price,productDescription,productTitle,userdata}=req.body
        console.log(req.body)
       const result= await addProduct.findOne({productName})
        if(result){
         return res.status(400).send({
           status:400,
           message:"product already exist"
         })
       }
        const data = await addProduct.create({
            productName,price,productDescription,productTitle,productImage:req.files[0].filename,userdata
       })
       if(data){
        return  res.status(200).send({ status: "true",message: "user register successfully", responce: data,})
       }
       else {
       return  res.send(
           {
             status: false,
             message: "user not register",
             responce: {},
   
           }
         )
       }
     } catch (error) {
       next(error)
     }
   }

  // =================== find data===========================


  module.exports.getProduct = async (req, res, next) =>{
    try {
        const getdata= await addProduct.findOne({_id:{_id:req.params.id}}).populate("userdata")
         if(!getdata){
          return res.send( {
            status: false,
            message: "user not register",
            responce: {}
          })
          
        }
        console.log(getdata)
         return res.send({
              status: true,
              message: "get all data",
              responce: getdata
            })
         } catch (error) {
        next(error)
      }
    }
 