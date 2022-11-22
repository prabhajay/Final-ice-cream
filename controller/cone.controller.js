const cartdb=require('../models/cone.model');

const getCone=async(req,res)=>{
    res.send("getCone");
}
const createCone=async(req,res)=>{
    try{
        const cone=req.body
        const newCone=await cartdb.create(cone)
        res.send(newCone)
        return
    }
    catch(err){
        res.status(500).send(err.message)
    }
}
const updateCone=async(req,res)=>{
    res.send('updateCone')
}

const deleteCone=async(req,res)=>{
    res.send('deleteCone')
}

module.exports= {
    getCone,
    createCone,
    updateCone,
    deleteCone
}