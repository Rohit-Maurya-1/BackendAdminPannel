const express= require ("express")
const bodyParser = require('body-parser')
const swaggerJsdoc =require("swagger-jsdoc")
const swaggerUi= require("swagger-ui-express")
require("./config/conn")
const port= process.env.port||8000;
const app=express();
app.use(express.json());

const swaggerDefinition = {
    info:{
      title: 'Portfolio application',
      version: '1.0.0', 
      description: 'This is the REST API for my product', 
      license: {
        name: "MIT",
        url: "https://opensource.org/licenses/MIT"
      },
      contact: {
        name: "Rohit",
        url: "https://rohitServer.com",
        email: "rohit@gmail.com.com"
      }
    },
    schemes: 'http',
    host: 'localhost:8000',
    basePath:'/', 
    servers:[
  
    ]
  };
  const options = {
    // import swaggerDefinitions
    swaggerDefinition,
    // path to the API docs
    apis: ['./swagger/**/*.yaml'],   
  };  
  const specs = swaggerJsdoc(options);
  app.use('/swagger', swaggerUi.serve,swaggerUi.setup(specs,{ explorer: true }));


app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:false}))
const userRoute=require('./routes/userRoutes')
const product_router= require("./routes/productRoutes")
const errorHandlerMiddleware = require("./middlewares/error-handler.middleware");
app.use(userRoute);
app.use(product_router)
app.use(errorHandlerMiddleware.errorHandler);

app.listen(port,()=>{
    console.log(`server is the listing on ${port}`)
})