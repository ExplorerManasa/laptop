const express=require("express")
const app=express()
const port=3005;
const cors=require("cors")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const Register=require("./registerSchema.js")

app.use(bodyParser.urlencoded({
	extended:true 
}))


app.use(bodyParser.json())

app.use(cors())

mongoose.connect("mongodb+srv://MERNSTACK:176165@cluster0.pvezxaj.mongodb.net/blog?retryWrites=true&w=majority")
		.then(()=>{
			console.log("connection established")
		})
		.catch((err)=>{
			console.log(err)
		})

app.get("/",(req,res)=>{
			res.send("manasa")
	})
app.post("/newData",(req,res)=>{
	const {username,password}=req.body
	console.log(username,password)
	res.send("added")
	
	const newFrontendUser=new Register({
		username:username,
		password:password
	})
	 
	newFrontendUser.save()
})	


app.listen(port,()=>console.log("server is running on port", port))