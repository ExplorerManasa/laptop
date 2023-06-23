import {Link} from 'react-router-dom'
import '../App.css'
function Navbar(){
	return(
		<div className="nav">
			<Link to="/">Home</Link>
			<Link to="/contact">Contact</Link>
			<Link to="/about">About</Link>
		</div>
		)
}

export default Navbar