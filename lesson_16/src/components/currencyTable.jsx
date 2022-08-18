import React from 'react';
function Table(props) {
	return (
		<div className='grid__table'>
			{props.data.map((el, index) => {
				return <div key={index}>{el.txt}</div>;
			})}
		</div>
	);
}
export default Table;