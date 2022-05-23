const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./Routes/Auth");

dotenv.config();

//  CHECK YOUR DB CONNECTION    
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
   
})
.then(()=>{console.log("Connected success")})
.catch(err=>console.log(err));

app.use(express.json());

app.use("/api/auth", authRoute);

app.listen(8800,()=>{
    console.log("listening to port 8800")
});