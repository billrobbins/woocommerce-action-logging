import React, { useState } from 'react';
import { edit } from './DataStore';

export const AddLogger = () => {
	const [logger, setLogger] = useState({});

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setLogger((values) => ({ ...values, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = {
			logger,
		};
		edit(data).then(() => {
			setLogger('');
		});
	};

	const onCancel = () => {
		setLogger({});
	};

	return (
		<form className="add-logger" onSubmit={handleSubmit}>
			<label htmlFor="action" className="option">
				<p>Action</p>
				<input
					name="action"
					type="text"
					className="regular-text"
					value={logger.action || ''}
					onChange={handleChange}
				/>
			</label>
			<label htmlFor="arguments" className="option">
				<p>Arguments</p>
				<input
					name="arguments"
					type="text"
					className="regular-text"
					value={logger.arguments || ''}
					onChange={handleChange}
				/>
			</label>
			<label htmlFor="priority" className="option">
				<p>Priority</p>
				<input
					name="priority"
					type="number"
					className="regular-text"
					value={logger.priority || ''}
					onChange={handleChange}
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
		</form>
	);
};
