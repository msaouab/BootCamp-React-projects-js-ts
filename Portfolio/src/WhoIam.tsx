import SocialMedia from './components/SocialMedia';
import './WhoIam.css'

function	WhoIam() {
	return (
		<div className="me">
			<div className='imgProfile'></div>
			<h1 className="name">Mohamed SAOUAB</h1>
			<h3 className="jobTitle">Software engineer</h3>
			<div className='line'></div>
			<SocialMedia></SocialMedia>
			<p className='title'>I'm SAOUAB Mohamed student at 1337 Coding 
				School khouribga - Um6p (42 Network)</p>
			<p className='title'>
				I recently started coding here In June 2021 
				and will publish my recent projects here.
				If you like to find out more about this coding 
				school and its exceptional education model:
				<a href="https://1337.ma/en/">1337 Coding School</a>!
				 or<a href="https://42.fr/en/homepage/">42 School</a>!
			</p>
		</div>
	);
}

export default WhoIam;