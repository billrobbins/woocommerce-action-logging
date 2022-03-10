import React, { useState, useEffect } from 'react';
import { edit, list } from './DataStore';
import { actionList } from './ActionOptions';
import { Notice } from './Notice';

export const AddLogger = () => {
	const [message, setMessage] = useState('');
	const [logger, setLogger] = useState({
		action: '',
		arguments: '',
		priority: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = {
			logger,
		};
		edit(data);
		setMessage('Settings Saved');
	};

	const onCancel = () => {
		edit({});
		setLogger({
			action: '',
			arguments: '',
			priority: '',
		});
	};

	useEffect(() => {
		const loadOptions = async () => {
			const response = await list();
			setLogger({
				action: response.action,
				arguments: response.arguments,
				priority: response.priority,
			});
		};
		loadOptions();
	}, []);

	return (
		<form className="add-logger" onSubmit={handleSubmit}>
			<label htmlFor="action" className="option">
				<p>Action</p>
				<select
					name="action"
					value={logger.action}
					onChange={(e) =>
						setLogger({ ...logger, action: e.target.value })
					}
				>
					{actionList}
				</select>
			</label>
			<label htmlFor="arguments" className="option">
				<p>Arguments</p>
				<input
					name="arguments"
					type="text"
					className="regular-text"
					value={logger.arguments}
					onChange={(e) =>
						setLogger({ ...logger, arguments: e.target.value })
					}
				/>
			</label>
			<label htmlFor="priority" className="option">
				<p>Priority</p>
				<input
					name="priority"
					type="number"
					className="regular-text"
					value={logger.priority}
					onChange={(e) =>
						setLogger({ ...logger, priority: e.target.value })
					}
				/>
			</label>
			<div className="button-group cancel-save">
				<button
					className="button button-secondary"
					onClick={() => onCancel()}
				>
					Cancel
				</button>
				<button className="button button-primary">Save</button>
			</div>
			<Notice message={message} />
		</form>
	);
};
