import React from 'react';
import avatar from '../../../../../../src/img/ava.jpg';

const Post = (props) => {
	return (
		<div className='post'>
			<img src={avatar} alt="Avatar" />
			<div>{props.msg}</div>
			<div><span>{props.likesCount} Like</span></div>
		</div>
	);
};
export default Post;