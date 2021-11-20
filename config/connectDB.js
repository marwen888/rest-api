const mongoose=require('mongoose')
const config=require('config')
const connectDB=()=>{
try{
    mongoose.connect(config.get("MONGO_URI"))
    console.log("db is already connected")
}
catch(error){
    console.log(error)
}
}
module.exports=connectDB

//REMARQUE IL FAUT RUNNER MONGODB START NET FROM INVITE DE COMMANDE POUR FAIRE LA LAISON 
//CONTACT=el
//el =user on envoye el son nom user
