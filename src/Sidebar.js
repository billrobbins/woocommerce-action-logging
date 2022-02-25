import React from 'react';
import { AddLogger } from './AddLogger';

export const Sidebar = () => {
	return (
		<div className="sidebar">
			<h1>Action Logging</h1>
			<AddLogger />
			<div className="instructions">
				<h2>How to Use</h2>
				<p>
					Select the action you want to monitor from the list above.
					You can specify any arguments you'd like to pass and the
					priority.
				</p>
				<p>
					The logs will be available in WooCommerce > Status > Logs
					for viewing.
				</p>
			</div>
		</div>
	);
};
