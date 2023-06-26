const express=require('express')
const product_router = express.Router();
const Product= require("../controllers/productController")
//=========== multer add====================
const multer= require("multer")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,'./public/upload/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.originalname + '-' + uniqueSuffix)
  }
})
const upload = multer({ storage:storage})
product_router.post('/product', upload.array('productImage'),Product.addProduct);
product_router.get('/Allproduct/:id',Product.getProduct);
module.exports=product_router;