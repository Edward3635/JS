import React from 'react';

const Header = () => {
	return (
		<header className='header'>
			<div className='header__logo'>
				<img className='img__logo' src={require('../../img/logo.png')} alt="logo" />
			</div>
		</header>
	)
};
export default Header;