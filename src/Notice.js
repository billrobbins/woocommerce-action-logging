import React from 'react';

export const Notice = (props) => {
	return (
		<div className="notice-bar">
			<p>{props.message}</p>
		</div>
	);
};
