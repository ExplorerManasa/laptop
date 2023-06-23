 const mongoose=require("mongoose")

const newUserSchema={
	username:String,
	password:String,
}
const Register=mongoose.model("articles",newUserSchema)

module.exports=Register
