import React from 'react';

const Header = () => {
	return (
		<header className='header'>
			<div className='flex__logo-input'>
				<div className='header__logo'>
					<img className='img__logo' src={require('../../img/logo.png')} alt="logo" />
				</div>
				<form className="flex-form">
					<input type="search" placeholder="What do you want to search?" />
					<input type="submit" value="Search" />
				</form>
			</div>
		</header>
	)
};
export default Header;