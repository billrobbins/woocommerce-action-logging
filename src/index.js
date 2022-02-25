// Import SCSS entry file so that webpack picks up changes
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { list } from './DataStore';
import { Sidebar } from './Sidebar';
import { ActionItem } from './ActionItem';
import './index.scss';

const RootComponent = () => {
	const [actionList, updateActionList] = useState([]);
	useEffect(() => {
		list().then((response) => {
			updateActionList(response);
		});
	}, []);

	return (
		<>
			<Sidebar />
			<div className="actions-list">
				<div className="action-list-header row">
					<div className="action column">
						<p className="heading">Action</p>
					</div>
					<div className="priority column">
						<p className="heading">Priority</p>
					</div>
					<div className="arguments column">
						<p className="heading">Arguments</p>
					</div>
				</div>
				{actionList.map((item) => (
					<ActionItem key={item.action} item={item} />
				))}
			</div>
		</>
	);
};
const domContainer = document.querySelector('.action-wrap');
render(<RootComponent />, domContainer);
