require('dotenv').config();
const express=require("express")
const app=express()
const bodyparser=require("body-parser")
const {getCone,
      createCone,
      updateCone,
      deleteCone
    } =require('./controller/cone.controller')
const PORT=process.env.PORT || 3000
const connectDB=require('./db/index.js')

connectDB();
app.use(express.json());
app.use(express.static('public'));

app.set('view engine','pug');
app.set('views','./views')

/*app.route('/cones')
.get(getCone)
.post(createCone)
.patch(updateCone)
.delete(deleteCone)*/

app.get("/",(req,res)=>{
  res.render("about.pug");
})
app.get("/about",(req,res)=>{
  res.render('about.pug');
})
app.get("/flavours",(req,res)=>{
  res.render('flavours.pug');
})
app.get("/cones",(req,res)=>{
  res.render('cones.pug');
})
app.get("/scoop",(req,res)=>{
  res.render('scoop.pug');
})
app.get("/cart",(req,res)=>{
  res.render('cart.pug');
})
app.get("/contact",(req,res)=>{
  res.render('contact.pug');
})
app.get("/order",(req,res)=>{
  res.render('order.pug');
})
app.get("/take-home",(req,res)=>{
  res.render('take-home.pug');
})


app.listen(3000,()=>{
  console.log("Server is running on port 3000");
})


/*
//app.use(bodyparser);
//const port=3000;
//app.get("/",function(request,response){
//response.send("Hello");
//});
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/about.html');
})
app.listen(3000,()=>{
  console.log("server is running on port is 3000");
})
app.post('/',(req,res)=>{
   res.send("<h1>We've received your request and will call you call back within 48 hours</h1>");
})
//app.get('/about',(req,res)=>{
  //  res.sendFile('about.html')
//})
//app.get('/icecream',(req,res)=>{
  //  res.sendFile(__dirname + 'icecream.html');
//})
app.get('/order',(req,res)=>{
    res.sendFile(__dirname + '/order.html');
})
app.get('/contact',(req,res)=>{
    res.sendFile(__dirname + '/contact.html');
})
mongoose.connection.once('open',()=>{
  console.log('Mongoose is connected')
})
app.listen(PORT,()=>{
    console.log('server started on port ${PORT}')
})

app.get('/contact',(req,res)=>{
    res.send('contact.html')
})
//app.listen(3000,function()
//{
  //  console.log("server started on port 3000");
//});*/
