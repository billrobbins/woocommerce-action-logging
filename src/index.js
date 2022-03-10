// Import SCSS entry file so that webpack picks up changes
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { AddLogger } from './AddLogger';
import './index.scss';

const RootComponent = () => {
	return (
		<>
			<h1>WooCommerce Action Logging</h1>
			<p>
				Select an action to track along with the priority. Logs are
				created by selected action and date. It is recommended to
				disable this plugin once debugging is complete.
			</p>
			<AddLogger />
		</>
	);
};
const domContainer = document.querySelector('.action-wrap');
render(<RootComponent />, domContainer);
