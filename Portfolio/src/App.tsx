import { useEffect, useState } from 'react'
import WhoIam from './WhoIam'
import './App.css'
import Navbar from './components/Navbar'
import Projects from './Projects'
import LoadingPage from './LoadingPage'
function App() {
	// const [isPending, setIsPending] = useState(false)
	
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setIsPending(true);
	// 	}, 5000)
	// }, [])

	return (
    	<div className="App">
			<Navbar />
			<WhoIam />
			<Projects />
    	</div>
	)
}

export default App
