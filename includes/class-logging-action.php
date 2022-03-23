<?php

/**
 * This simple class handles logging creation
 * 
 */

class CreateWCActionLog {

	public $action;

	function __construct() {

		$this->action = get_option( 'woo_action_logging_settings' );

		if( isset( $this->action['priority']) && isset( $this->action['action'] ) ) {
			add_action( $this->action['action'], [ $this, 'track_action_use' ], $this->action['priority'] );
		} 
		
	}

	function track_action_use( $object_id ) {
		$logger = new WC_Logger();
		$handle = $this->action['action'] . '-' . $this->action['arguments'] . '-' . $object_id;
		$logger->add( $handle, str_repeat( '#', 20 ) . ' ' . $this->action['action'] . ' ' . str_repeat( '#', 20 ) . PHP_EOL );
		$logger->add( $handle, print_r( debug_backtrace( 2, 20 ), true ) . PHP_EOL );
		$logger->add( $handle, str_repeat( '#', 60 ) . PHP_EOL );
	}

}

$CreateWCActionLog = new CreateWCActionLog();