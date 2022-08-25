import React from 'react';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
	return (
		<section className='section__profile'>
			<div className='profile__banner'>
				<img src={require('../../../img/banner.jpg')} alt="banner" />
			</div>
			<div className='profile__content'>
				Ava + description
				<MyPosts />
			</div>
		</section>
	);
};
export default Profile;