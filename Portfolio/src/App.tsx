import { useState } from 'react'
import WhoIam from './WhoIam'
import './App.css'
import Navbar from './components/Navbar'

function App() {
	const [count, setCount] = useState(0)
	
	return (
    	<div className="App">
			<Navbar ></Navbar>
			<WhoIam />
    	</div>
	)
}

export default App
