<?php
/**
 * Plugin Name: Veldhuizen - Gutenberg
 * Plugin URI: www.brutcommunicatie.nl
 * Description: Gutenberg blokken voor Veldhuizen
 * Author: Leroy Davidson Descelles
 * Author URI: www.brutcommunicatie.nl
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
