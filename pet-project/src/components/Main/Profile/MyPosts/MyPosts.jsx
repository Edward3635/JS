import React from 'react';
import Post from './Post/Post';

const MyPosts = () => {
	const postData = [
		{ id: 1, msg: 'This is my first post!', likesCount: 32 },
		{ id: 2, msg: 'Hello there!', likesCount: 10 }
	];
	return (
		<div className='my__posts'>
			<h3>My posts</h3>
			<textarea></textarea>
			<div className='post__buttons'>
				<button className='btn__add-post'>Add post</button>
				<button className='btn__remove-post'>Remove post</button>
			</div>
			<Post msg={postData[1].msg} likesCount={postData[1].likesCount} />
			<Post msg={postData[0].msg} likesCount={postData[0].likesCount} />
		</div>
	);
};
export default MyPosts;