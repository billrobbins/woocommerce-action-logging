<?php

class Action_Logging_Page {
 
    /**
     * Autoload method
     * @return void
     */
    public function __construct() {
        add_action( 'admin_menu', array(&$this, 'register_sub_menu') );
    }
 
    /**
     * Register submenu page
     * @return void
     */
    public function register_sub_menu() {
        add_submenu_page( 
            'tools.php', 'Action Logging', 'Action Logging', 'manage_options', 'action-logging', array(&$this, 'admin_page_callback')
        );
    }
 
    /**
     * Render submenu page
     * @return void
     */
    public function admin_page_callback() {
        echo '<div class="action-wrap"></div>';
    }
 
}
 
new Action_Logging_Page();