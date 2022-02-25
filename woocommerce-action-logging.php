<?php 

/**
 * Plugin Name:       WooCommerce Action Logging
 * Plugin URI:        https://github.com/billrobbins/woocommerce-action-logging
 * Description:       Logs a stack backtrace whenever a specified WooCommerce hook is used 
 * Version:           0.0
 * Requires at least: 5.2
 * Requires PHP:      7.4
 * Author:            Bill Robbins
 * Author URI:        https://justabill.blog
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 */

 // Load REST API Endpoint
require_once plugin_dir_path( __FILE__ ) . '/includes/class-endpoints.php';

// Load Admin Page
require_once plugin_dir_path( __FILE__ ) . '/includes/class-admin-page.php';

/**
 * Register and enqueue JS and CSS
 */
function add_extension_register_script() {
	if ( isset( $_GET['page'] ) && ! empty( $_GET['page'] ) && 'action-logging' !== $_GET['page'] ) {
		return;
	}
	
	$script_path       = '/build/index.js';
	$script_asset_path = dirname( __FILE__ ) . '/build/index.asset.php';
	$script_asset      = file_exists( $script_asset_path )
		? require( $script_asset_path )
		: array( 'dependencies' => array(), 'version' => filemtime( $script_path ) );
	$script_url = plugins_url( $script_path, __FILE__ );

	wp_register_script(
		'action-logging',
		$script_url,
		$script_asset['dependencies'],
		$script_asset['version'],
		true
	);

	wp_register_style(
		'action-logging',
		plugins_url( '/build/index.css', __FILE__ ),
		// Add any dependencies styles may have, such as wp-components.
		array(),
		filemtime( dirname( __FILE__ ) . '/build/index.css' )
	);

	wp_enqueue_script( 'action-logging' );
	wp_enqueue_style( 'action-logging' );
}

add_action( 'admin_enqueue_scripts', 'add_extension_register_script' );