import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {useState} from "react";
import index from "./index.html"

function App() {
   const [name,setname]=useState("Manasa")
   const [password,setPassword]=useState("1234")


  function save(){
     fetch("http://localhost:3005/newData",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({username:name,password:password})
    })
    .then((res)=>{
      console.log(res)
      if(res.status===200)
        alert("registration successfull")
    })
    .catch((err)=>{
      alert(err)
    })
  }
  class Index extends React.Component {
   render(){
      return (
         <iframe src="index"></iframe> 
      );
   }
}
export default Index;
