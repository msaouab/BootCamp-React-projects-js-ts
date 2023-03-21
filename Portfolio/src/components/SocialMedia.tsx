import	{ useEffect, useState } from 'react'
import	github from '../assets/github.svg'
import	instagram from '../assets/instagram.svg'
import	linkedin from '../assets/linkedin.svg'
import	email from '../assets/email.svg'
import	telegram from '../assets/telegram.svg'
import	twitter from '../assets/twitter.svg'
import	whatsapp from '../assets/whatsapp.svg'
import './SocialMedia.css'
import styled from 'styled-components'

const listSocialmedia = [
	{
		id: 0,
		link: "mailto:saouab.mohammed@gmail.com",
		name: "Mail",
		cls: "Mail media",
		icon: email,
	},
	{
		id: 1,
		link: "https://github.com/msaouab",
		name: "Github",
		cls: "Github media",
		icon: github,
	},
	{
		id: 2,
		link: "https://www.linkedin.com/in/msaouab/",
		name: "Linkedin",
		cls: "Linkedin media",
		icon: linkedin,
	},
	{
		id: 3,
		link: "https://twitter.com/msaouab",
		name: "Twitter",
		cls: "Twitter media",
		icon: twitter,
	},
	{
		id: 4,
		link: "https://www.instagram.com/themedsaouab/",
		name: "Instagram",
		cls: "Instagram media",
		icon: instagram,
	},
	{
		id: 5,
		link: "https://wa.me/qr/EUWI4W2PDJJOF1",
		name: "Whatsapp",
		cls: "Whatsapp media",
		icon: whatsapp,
	},
	// {
	// 	id: 6,
	// 	link: "https://wa.me/qr/EUWI4W2PDJJOF1",
	// 	name: "Telegram",
	// 	cls: "Telegram media",
	// 	icon: telegram,
	// }
]

const	MediaStyle = styled.div`
	display: flex;
`;

const	SocialMedia = () => {
	const [isHover, setIsHover] = useState(0);
	useEffect(() => {}, [isHover]);

	return (
	<MediaStyle>
{		listSocialmedia.map((el, i) => {
			const {id, link, cls, name, icon} = el;
			return (
				<div className='child' key={i}>
					<a 
						key={id}
						href={link}
						className={cls}
						target="_blank">
						<img src={icon} alt={name}
							onMouseEnter={() => setIsHover(id)}
							onMouseLeave={() => setIsHover(0)}
							/>
						{isHover == id && <span>{name} {id}</span>}
					</a>
				</div>
					)
				})}
		
				 </MediaStyle> 
	)
}

export default SocialMedia
