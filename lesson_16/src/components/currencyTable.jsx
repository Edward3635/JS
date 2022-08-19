import React from 'react';
function Table(props) {
	return (
		<div className='grid__table'>
			<div className='currency__number'>
				{props.data.map((el, index) => {
					return <div key={index}>{index + 1}</div>;
				})}
			</div>
			<div className='currency__name'>
				{props.data.map((el, index) => {
					return <div key={index}>{el.txt}</div>;
				})}
			</div>
			<div className='currency__price'>
				{props.data.map((el, index) => {
					return <div key={index}>{el.rate}</div>;
				})}
			</div>
		</div>
	);
}
export default Table;