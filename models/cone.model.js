const mongoose=require('mongoose');
var cartSchema=new mongoose.Schema({
    product:String,
    price:Number,
    quantity:Number,
    total:Number
})

const Cartdb=mongoose.model('cart',cartSchema);
module.exports=Cartdb;