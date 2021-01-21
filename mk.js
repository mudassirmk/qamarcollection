
const path=require("path");
const hbs=require("hbs");

const express =require("express");
const app=express();

const port =process.env.PORT //3000
const staticpath = path.join(__dirname,"/template");
const parpath = path.join(__dirname,"/template/partials");



 app.set("view engine","hbs");
 app.set('views',staticpath);
 hbs.registerPartials(parpath);

app.use(express.static(staticpath));

app.get("/home",(req,res)=>{

   res.render("indexx");
});

app.get("/",(req,res)=>{

    res.render("indexx");
 });
app.get("/about",(req,res)=>{

    res.render("about");
});

app.get("/sign",(req,res)=>{

    res.render("sign");
});

app.get("/contact",(req,res)=>{

    res.render("contact");
});

app.listen(port,()=>{
    console.log(`listening at port ${port}`);
});
