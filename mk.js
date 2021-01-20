
const path=require("path");

const express =require("express");
const app=express();

const port =process.env.PORT
const staticpath = path.join(__dirname,"/public");

//app.set("view engine","hbs");

app.use(express.static(staticpath));
app.get("/",(req,res)=>{

 //   res.render("indexx");
});

app.get("/about",(req,res)=>{

    res.end("ok");
});

app.get("/page",(req,res)=>{

    res.end("ok");
});

app.get("/con",(req,res)=>{

    res.end("ok");
});

app.listen(port,()=>{
    console.log(`listening at port ${port}`);
});
