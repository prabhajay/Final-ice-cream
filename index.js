const express=require("express")
const app=express()
const bodyparser=require("body-parser")
const PORT=process.env.PORT || 3000
const mongoose=require('mongoose')

const uri='mongodb+srv://root:admin@cluster0.ikahhmw.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(uri,{ 
  useNewUrlParser:true,
  useUnifiedToplogy:true
}).catch(error=>console.log(error))


app.get("/",(req,res)=>{
  res.send("welcome to my stroe");
})

app.listen(3000,()=>{
  console.log("Server is running on port 3000");
})

app.get("/flavours",(req,res)=>{
  res.send("welcome to Flavours Page");
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
