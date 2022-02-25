import apiFetch from '@wordpress/api-fetch';

const list = () => {
	return apiFetch({ path: '/woo-action-logging/v1/options' });
};

const edit = (data) => {
	return apiFetch({
		path: '/woo-action-logging/v1/options',
		method: 'POST',
		data,
	});
};

export { list, edit };
