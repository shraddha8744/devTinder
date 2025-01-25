const express=require("express")
const app=express()


app.use("/test",(req,res)=>{
    res.send({
        success:true,
        message:"hello i am test route"
    })
    
})

app.use("/user",(req,res)=>{
    res.send({
        success:true,
        message:"user created successfully"
    })
})
app.listen(8080,()=>{
    console.log("server started");
    
})

console.log("hello world");

