const mongoose=require('mongoose');
var schema=new mongoose.schema({
    product:{
        type:String,
        required:true,
        min:5,
        max:128
    },
    price:{
        type:Number
    },
    quantity:{
        type:Number
    },
    total:{
        type:Number
    }
})
const cart=mongoose.model('cart',schema);

module.exports=cart;