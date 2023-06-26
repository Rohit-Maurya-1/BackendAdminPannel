const express=require('express')
// const upload=require("../imageUpload/multer")
const router = express.Router();
const controller=require("../controllers/userController");

router.post('/user',controller.createUser);
router.post('/userlogin',controller.loginUser);
router.get('/getAllUser/:id',controller.getAllUsers);

module.exports=router;