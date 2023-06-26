const userRegister = require("../modal/registration")
const RESPONCE =require("../constant/responce")
const { SUCCESS } = require("../constant/responce")
module.exports.createUser = async (req, res,  ) =>{
 try {
     const { name, email, password } = req.body
     const result= await userRegister.findOne({email})
     if(result){
       return RESPONCE.ERROR(res, "email already exist")
    }
     const data = await userRegister.create({
       name, email, password })
     if (data){
      return RESPONCE.SUCCESS(res, "user register successfully",data)
    }
    else {
     return  res.send(
        {
          status: false,
          message: "user not register",
          responce:{},
        }
      )
    }
  } catch (error) {
    next(error)
  }
}
// =====================================================login data============================
module.exports.loginUser = async (req, res) => {
  const { userNameEmail, password} = req.body
  try {
   const match = await userRegister.findOne({ $or: [{email: userNameEmail},{name: userNameEmail},]
  })
    if (!match) {
      return res.send({
        status: "true",
        message: "user not found!",
        response: {}
      })
    }
     if (password !== match.password) {
      return res.send({
        status: "true",
        message: "invalid password",
        response: {}
      })
    }
    res.send({ 
    message: "login successfully", 
    response: match 
  })
  } catch (error) {
    res.send({ message: "error" })
  }
}
//===========================================================
module.exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await userRegister.find({ _id: {$ne: req.params._id }}).select([
      "name",
      "email",
      "password",
      ]);
      if(!users){
        return res.status(400).send({
          status:false,
          message:"user not find",
          responce:{}
        })
      }
    return res.status(200).send({
       status:true,
       responce:users,
       message:"data get sucessfully"
    })
  } catch (error) {
    next(error);
  }
};

//===============================



