const mongoose =require("mongoose");

const express=require("express");

const app=express();

const cors = require("cors");

const bodyparser =require("body-parser");

const studentRoute = require("./controller/studentRoute")

mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://sriganesan06:Samplepassword@cluster0.sjygwbt.mongodb.net/schooldb");
var db=mongoose.connection;
db.on("open",()=>console.log("Connected!!!!"));
db.on("error",()=>console.log("Error in connection"));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors());
app.use("/studentRoute",studentRoute);

app.listen(4000,()=>{
    console.log("Server connected to port:4000")
})