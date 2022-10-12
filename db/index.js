const mongoose = require('mongoose')

    module.exports=()=>{
        const {DB_USERNAME,
            DB_PASSWORD,
            DB_NAME}=process.env
        //const uri='mongodb+srv://admin:admin@cluster0.pe3bhbn.mongodb.net/?retryWrites=true&w=majority'
        const uri=`mongodb+srv://admin:admin@cluster0.znilotp.mongodb.net/?retryWrites=true&w=majority`
        mongoose.connect(uri).catch(err=>{
            console.error(err)
        })

mongoose.connection.once('open',() => {
    console.log('mongoose conencted successfully')
})
}