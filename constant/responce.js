module.exports={
  SUCCESS:function(res, msg, body = {} ){
     return  res.send({
         status:200,
         msg:msg,
         success:true,
         body:{}
       })
  },
   ERROR:function( res ,msg, body = {}){
    return res.send({
      status:400,
      msg:msg,
      success:false,
      body:{}
    })
}


}
   

   
