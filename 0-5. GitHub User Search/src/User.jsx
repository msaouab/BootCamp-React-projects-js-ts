import { useState } from "react";

function	User({avatar, url, username}) {
	return (
		<div className="user">
			<a href={url} target="_blank" rel='noopener noreferrer' >
				<img src={avatar} width='50' height='50' alt="profile" />
				{/* {username} */}
				{username.length < 10 ? username : `${username.slice(0, 8)}...`}
			</a>
		</div>
	);
}

export default User