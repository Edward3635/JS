import React from 'react';
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div className='my__posts'>
			<h3>My posts</h3>
			<textarea></textarea>
			<div className='post__buttons'>
				<button className='btn__add-post'>Add post</button>
				<button className='btn__remove-post'>Remove post</button>
			</div>
			<Post msg="Hello there!" />
			<Post msg="This is my first post!" />
		</div>
	);
};
export default MyPosts;