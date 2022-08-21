import React from 'react';

const Profile = () => {
	return (
		<div className='main__profile'>
			<div className='profile__banner'>
				<img src={require('../../../img/banner.jpg')} alt="banner" />
			</div>
			<div>
				Profile content
			</div>
		</div>
	);
};
export default Profile;