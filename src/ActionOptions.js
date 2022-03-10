const actionOptions = [
	{
		id: '',
		name: '',
	},
	{
		id: 'woocommerce_order_status_changed',
		name: 'Order Status Changed',
	},
	{
		id: 'woocommerce_order_status_pending',
		name: 'Pending Order Status',
	},
	{ id: 'woocommerce_order_status_failed', name: 'Failed Order Status' },
	{
		id: 'woocommerce_order_status_on-hold',
		name: 'On Hold Order Status',
	},
	{
		id: 'woocommerce_order_status_processing',
		name: 'Processing Order Status',
	},
	{
		id: 'woocommerce_order_status_completed',
		name: 'Completed Order Status',
	},
	{
		id: 'woocommerce_order_status_refunded',
		name: 'Refunded Order Status',
	},
	{
		id: 'woocommerce_order_status_cancelled',
		name: 'Cancelled Order Status',
	},
	{
		id: 'woocommerce_subscription_status_changed',
		name: 'Subscription Status Changed',
	},
];

export const actionList = actionOptions.map((option) => {
	return (
		<option key={option.id} value={option.id}>
			{option.name}
		</option>
	);
}, this);
