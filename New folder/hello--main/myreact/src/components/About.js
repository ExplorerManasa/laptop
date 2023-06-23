import {useState} from 'react'

function About(){
	const [village,setVillage]=useState("karnataka");
	const [country,setCountry]=useState("India")
	const [password,setPassword]=useState("Enter password")
	return(
		<div>
			<h1>{country}</h1>
			<p>{village}</p>
			<p>{password}</p>
			<input
			     onChange={(e)=>setVillage(e.target.value)}/><br/>
			<input
			     onChange={(e)=>setPassword(e.target.value)}/><br/>
			 <button onClick={()=>console.log(password)}>Submit</button>
			                       {/*to display on console*/}

		</div>
		)
}

export default About