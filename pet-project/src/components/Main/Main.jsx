import React from 'react';
import Navigation from './Navigation/Navigation';
import Profile from './Profile/Profile';

const Main = () => {
	return (
		<main className='main'>
			<Navigation />
			<div className='main__content'>
				<Profile />
			</div>
		</main>
	)
};
export default Main;