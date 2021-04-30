const express = require('express');
const app = express();
const mongoose = require('mongoose')
const usrRoute= require('./routes/usrRoute')
const rankRoute = require('./routes/rankRoute')
const admRoute = require('./routes/adminRouter')
const loginRoute = require('./routes/loginRoute')
//const userRouter = require('./routes/userRouter')
//const loginRouter = require('./routes/loginRouter')
const cors = require('cors')
var port = process.env.PORT || 4000;
const bodyParser = require('body-parser')

mongoose.connect('mongodb+srv://system:root@cluster0.27piq.mongodb.net/ranks?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
})
.then(()=>
    console.log("database connected")
)
.catch((err)=>
    console.log(err)
)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())
app.listen(port,()=>{
console.log(`server is running ${port} succesfull`)
})
//app.use('/signup',userRouter)
//app.use('/login',loginRouter)
app.use("/signup",usrRoute)
app.use('/ranks',rankRoute)
app.use('/admin',admRoute)
app.use('/login',loginRoute)