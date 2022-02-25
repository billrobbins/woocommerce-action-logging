<?php 

// Example subscription status change logger

add_action( 'woocommerce_subscription_status_changed', 'ijab_track_status_update', 10, 3 );

function ijab_track_status_update( $object_id ) {
	if ( class_exists( 'WC_Logger' ) ) {
		$logger = new WC_Logger();
		$handle = 'Status-change-subscription-id-' . $object_id;
		$logger->add( $handle, str_repeat( '#', 20 ) . ' Subscription status change ' . str_repeat( '#', 20 ) . PHP_EOL );
		$logger->add( $handle, print_r( debug_backtrace( 2, 20 ), true ) . PHP_EOL );
		$logger->add( $handle, str_repeat( '#', 60 ) . PHP_EOL );
	}
}