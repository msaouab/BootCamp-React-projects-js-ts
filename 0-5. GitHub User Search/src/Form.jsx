import { useState } from "react";

function	Form({onSubmit, onChange, value, disabled}) {
	return (
		<form className="search-form" onSubmit={onSubmit}>
			<input
				placeholder="Enter username or email"
				onChange={onChange}
				autoComplete='off'
				value={value}
				type="text"
				id="search" 
				required
			/>
			<button
				type="submit"
				disabled={disabled}
			>Search</button>
		</form>
	);
}

export default Form