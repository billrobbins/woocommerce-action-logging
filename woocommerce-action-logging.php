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
require_once plugin_dir_path( __FILE__ ) . 'endpoints.php';

// Load Admin Page
require_once plugin_dir_path( __FILE__ ) . '/includes/class-admin-page.php';