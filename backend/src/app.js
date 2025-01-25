const express=require("express")
const app=express()

 app.get("/user",(req,res)=>{
    res.send({
        message:"user fetch successfully"
    })
 })

 app.post("/user",(req,res)=>{
    res.send({
        message:"create user successfully"
    })
 })
 app.delete("/user",(req,res)=>{
    res.send({
        message:"delete user successfully"
    })
 })



app.use("/test",(req,res)=>{
    res.send({
        success:true,
        message:"hello i am test route"
    })
    
})


app.listen(8080,()=>{
    console.log("server started");
    
})

console.log("hello world");

