const mongooes= require("mongoose")
mongooes.connect("mongodb://localhost:27017/userData").then((res)=>{
     console.log("connection successfully")
}).catch((e)=>{
    console.log("not connected")

})