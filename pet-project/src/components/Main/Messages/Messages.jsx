import React from 'react';

const Messages = () => {
	return (
		<section className='section__messages'>
			<div className='dialogs'>
				<div className='dialog'>Homer</div>
				<div className='dialog'>Mary</div>
				<div className='dialog'>James</div>
				<div className='dialog'>Jennifer</div>
				<div className='dialog'>Richard</div>
			</div>
			<div className='messages'>
				<div className="message">Hey!</div>
				<div className="message">What's up?</div>
				<div className="message">Are you busy?</div>
			</div>
		</section>
	);
};

export default Messages;