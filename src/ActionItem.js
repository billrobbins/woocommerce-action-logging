import React from 'react';

export const ActionItem = (props) => {
	return (
		<div className="action-list-item row">
			<div className="action column">
				<p>{props.item.action}</p>
			</div>
			<div className="priority column">
				<p>{props.item.priority}</p>
			</div>
			<div className="arguments column">
				<p>{props.item.arguments}</p>
			</div>
		</div>
	);
};
