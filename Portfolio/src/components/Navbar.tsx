import React from 'react'
import styled from 'styled-components'

const NavBarStyle = styled.nav`
	color: aliceblue;
	position: fixed;
	width: 100%;
	font-family: 'Courier New', Courier, monospace;
	ul{
		height: 3rem;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		li {
			list-style: none;
			cursor: pointer;
			padding: 0.5rem 1rem;
			border-radius: 5px;
			border: 1px solid transparent;
			text-shadow: 1px 1px 10px;
		}
		li:hover {
			border: 1px solid white;
		}
	}
`;

const Navbar = () => {
  return (
	<NavBarStyle>
		<ul>
			<li id="#Home">Home</li>
			<li id="#Projects">Projects</li>
			<li id="#Contact">Contact</li>
		</ul>
	</NavBarStyle>
  )
}

export default Navbar