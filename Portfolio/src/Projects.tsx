import styled from 'styled-components'
import './Projects.css'

const	Projects = () => {
	return (
		<main className='main'>
			<div className='projects'>
				<a className="project-tile" href="https://codepen.io/freeCodeCamp/full/zNqgVx" target="_blank">
					<img className="project-img" src="https://cdn.freecodecamp.org/testable-projects-fcc/images/tribute.jpg" alt="project" />
					<p className="project-title">
						<span className="code">&lt;</span>
						Tribute Page
						<span className="code">&#47;&gt;</span>
					</p>
				</a>
				<a className="project-tile" href="https://codepen.io/freeCodeCamp/full/qRZeGZ" target="_blank">
					<img className="project-img" src="https://cdn.freecodecamp.org/testable-projects-fcc/images/random-quote-machine.png" alt="project" />
					<p className="project-title">
						<span className="code">&lt;</span>
						Random Quote Machine
						<span className="code">&#47;&gt;</span>
					</p>
				</a>
				<a className="project-tile" href="https://codepen.io/freeCodeCamp/full/wgGVVX" target="_blank">
					<img className="project-img" src="https://cdn.freecodecamp.org/testable-projects-fcc/images/calc.png" alt="project" />
					<p className="project-title">
						<span className="code">&lt;</span>
						JavaScript Calculator
						<span className="code">&#47;&gt;</span>
					</p>
				</a>
				<a className="project-tile" href="https://codepen.io/freeCodeCamp/full/mVEJag" target="_blank">
					<img className="project-img" src="https://cdn.freecodecamp.org/testable-projects-fcc/images/map.jpg" alt="project" />
					<p className="project-title">
						<span className="code">&lt;</span>
						Map Data Across the Globe
						<span className="code">&#47;&gt;</span>
					</p>
				</a>
				<a className="project-tile" href="https://codepen.io/freeCodeCamp/full/wGqEga" target="_blank">
					<img className="project-img" src="https://cdn.freecodecamp.org/testable-projects-fcc/images/wiki.png" alt="project" />
					<p className="project-title">
						<span className="code">&lt;</span>
						Wikipedia Viewer
						<span className="code">&#47;&gt;</span>
					</p>
				</a>
				<a className="project-tile" href="https://codepen.io/freeCodeCamp/full/KzXQgy" target="_blank">
					<img className="project-img" src="https://cdn.freecodecamp.org/testable-projects-fcc/images/tic-tac-toe.png" alt="project" />
					<p className="project-title">
						<span className="code">&lt;</span>
						Tic Tac Toe Game
						<span className="code">&#47;&gt;</span>
					</p>
				</a>
			</div>
		</main>
	)
}

export default Projects;