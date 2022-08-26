import React from 'react';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
	return (
		<NavLink className='dialog' to={`/messages/${props.id}`}>{props.name}</NavLink>
	);
};

const Message = (props) => {
	return (
		<div className="message">{props.msg}</div>
	);
};

const Messages = () => {
	const dialogData = [
		{ id: 1, name: 'Homer' },
		{ id: 2, name: 'Mary' },
		{ id: 3, name: 'James' },
		{ id: 4, name: 'Jennifer' },
		{ id: 5, name: 'Richard' },
		{ id: 6, name: 'Scott' }
	],
		messageData = [
			{ id: 1, message: 'Hey!' },
			{ id: 2, message: "What's up?" },
			{ id: 3, message: 'Are you busy?' }
		];
	return (
		<section className='section__messages'>
			<div className='dialogs'>
				<DialogItem id={dialogData[0].id} name={dialogData[0].name} />
				<DialogItem id={dialogData[1].id} name={dialogData[1].name} />
				<DialogItem id={dialogData[2].id} name={dialogData[2].name} />
				<DialogItem id={dialogData[3].id} name={dialogData[3].name} />
				<DialogItem id={dialogData[4].id} name={dialogData[4].name} />
				<DialogItem id={dialogData[5].id} name={dialogData[5].name} />
			</div>
			<div className='messages'>
				<Message msg={messageData[0].message} />
				<Message msg={messageData[1].message} />
				<Message msg={messageData[2].message} />
			</div>
		</section>
	);
};

export default Messages;