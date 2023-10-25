const express=require("express");
const studentRoute= new express.Router();
const studentschema=require("../model/studentschema")
studentRoute.post("/create-student",(req,res)=>{
    studentschema.create(req.body,(err,data)=>{
            if(err)
                return err
            else
                return res.json(data)
    })
});
studentRoute.get("/",(req,res)=>{
    studentschema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
});
//raj-q
studentRoute.route("/update-student/:id")
.get((req,res)=>{
    studentschema.findById(req.params.id,(err,data)=>{
        if(err)
            return err;
        else
            return res.json(data);
    })
})
.put((req,res)=>{
    studentschema.findByIdAndUpdate(req.params.id,{$set:req.body},
        (err,data)=>{
            if(err)
                return err
            else
                return res.json(data)
        })
})
studentRoute.delete("/delete-student/:id",(req,res)=>{
    studentschema.findByIdAndRemove(req.params.id,(err,data)=>{
        if(err)
            return err;
        else
            return res.json(data);
    })
});




module.exports = studentRoute;