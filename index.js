import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import express from "express";
import bodyparse from "body-parser";
import cookieParser from 'cookie-parser';
const _ = require('lodash');

const app = express();
const port = 3000;

app.use(cookieParser())
app.use(bodyparse.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));
const day1="jxie cdjidpj kdlf ndfnk prkokr nksdnks oeipw dnfnf rijorj almlqsm trotr jnfknf nvifgjrijo jiejfoejf fndknfof dfdjfkdm fjjhrfd cdhfirfnjnf d fjirjfrmfjforor ndfndnfrf d dfijforjf  pew ngngln kpfmmglr hudued ehdieid ejdiejdoeijd ediehdoie djeodoed ejdoeijdoi edjejd chgfy fgyfge ";
let post1=[];
/* Write your code here:
Step 1: Render the home page "/" index.ejs
Step 2: Make sure that static files are linked to and the CSS shows up.
Step 3: Add the routes to handle the render of the about and contact pages.
  Hint: Check the nav bar in the header.ejs to see the button hrefs
Step 4: Add the partials to the about and contact pages to show the header and footer on those pages. */
app.get("/",(req,res)=>{
  //res.render("index",{post2:post1});
  res.render("index",{post2:post1});
  console.log(post1);
});

app.get('/getcookie', (req, res) => {
  //show the saved cookies
  //const post5=JSON.parse(req.cookies);
  //res.send(post5);
  console.log(req.cookies)
  res.send(req.cookies);
});
app.get("/Day1",(req,res)=>{
  res.render("index",{day1:day1});
})
app.get("/about",(req,res)=>{
  res.render("about");
});
app.get("/contact",(req,res)=>{
  res.render("contact");
})
app.get("/compose",(req,res)=>{
  res.render("compose");
})
app.post("/compose",(req,res)=>{
 const post={
     title:req.body.fName,
     content:req.body.lName
 }
 //const title= req.body["post-title"];
// res.render("index",{title:post, post:content});
res.cookie(req.body.fName,req.body.lName);
 post1.push(post);
 res.redirect("/");

});
app.get("/post1/:postname", (req,res)=>{
  console.log(req.params.postname);
  const posttitle= _.lowerCase(req.params.postname);
  post1.forEach(function(post){
    const items= _.lowerCase(post.title);
    if(items === posttitle)
    {
      res.render("post",{postitle:post});
    }
  })
})
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
