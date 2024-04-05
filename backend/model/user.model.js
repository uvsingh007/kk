const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    name:{type:String, require:true},
    email:{type:String, require:true, unique:true},
    pass:{type:String, require:true},
    verify:{type:Boolean, default:false},
    avatar:{type:String , default:"https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"}
},{
    versionKey:false
})

const UserModel=mongoose.model('user',userSchema)

module.exports={
    UserModel
}