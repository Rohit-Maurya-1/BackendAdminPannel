module.exports.errorHandler=(err,req,res,next)=>{
    try {
       if(err) return res.status(500).send({message:err,status:500})
     } catch (error){
     console.log(error)   
    }
}