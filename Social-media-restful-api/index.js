const express = require("express");
const app = express();
const dotenv = require("dotenv");
const helmet = require ('helmet');
const mongoose = require('mongoose');
const morgan = require('morgan')
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')
const getHeader = require('../Social-media-restful-api/middleware/getHeaders')
const postHeaders = require('../Social-media-restful-api/middleware/postHeaders')

//all ur secrets file 
dotenv.config();

//connecting your database to mongoose 
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

//middleware
app.use(express.json());
app.use(helmet())
app.use(morgan('common'))
app.use(getHeader)
//anytime we run this route this middleware will take effect, basically assigning the userRoute to get route of  /api/users
app.use(postHeaders)
app.use("/api/users",userRoute);
//displays auth routes
app.use("/api/auth", authRoute)
app.use("/api/posts",postRoute)


//create our homepage route
app.get('/', (req, res,) => {
  res.send('welcome to homepage')
})  

//create our users page 
app.get('/user', (req, res,) => {
  res.send('welcome to users page')
})
// launches ur application to port 300
app.listen(5000, () => {
  console.log('backend server is running!')
}) 

 