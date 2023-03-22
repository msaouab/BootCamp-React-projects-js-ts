import	{ useEffect, useState } from 'react'
import listSocialmedia from './data';
import './SocialMedia.css'

const	SocialMedia = () => {
	const [isHover, setIsHover] = useState(0);
	const [active, setActive] = useState(0);
	const hoverOn = (id: number) => {
		setIsHover(id);
	}
	const hoverOut = (id: number) => {
		setIsHover(id);
	}

	return (
		<div className='media'>
		{
			listSocialmedia.map((el, i) => {
				const {id, link, cls, name, icon} = el;
				return (
					<a href={link} key={i}
					className={`${cls} ${active === id ? 'active' : ''}`}
					onMouseEnter={() => {
						hoverOn(id);
						setActive(id);
					}}
					onMouseLeave={() => {
						hoverOut(id);
						setActive(id);
					}}>
					<img src={icon} alt={name} />
					{isHover === id && <span>{name}</span>}
					</a>
					)
				})
			}
		</div>
	)
}

export default SocialMedia
