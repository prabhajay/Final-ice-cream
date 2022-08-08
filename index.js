const express=require("express");
const app=express();
const bodyparser=require("body-parser");
const PORT=3000;
app.use()
//const port=3000;
//app.get("/",function(request,response){
//response.send("Hello");
//});
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/contact.html');
})
//app.get('/about',(req,res)=>{
  //  res.sendFile('about.html')
//})
app.get('/icecream',(req,res)=>{
    res.sendFile(__dirname + 'icecream.html');
})
app.get('/order',(req,res)=>{
    res.sendFile(__dirname + 'order.html');
})
app.get('/contact',(req,res)=>{
    res.sendFile(__dirname + 'contact.html');
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
//});
