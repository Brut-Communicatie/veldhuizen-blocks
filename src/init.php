<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * Assets enqueued:
 * 1. blocks.style.build.css - Frontend + Backend.
 * 2. blocks.build.js - Backend.
 * 3. blocks.editor.build.css - Backend.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function veldhuizen_nav_cgb_block_assets() { // phpcs:ignore
	// Register block styles for both frontend + backend.
	wp_register_style(
		'veldhuizen_nav-cgb-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		is_admin() ? array( 'wp-editor' ) : null, // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
	);

	// Register block editor script for backend.
	wp_register_script(
		'veldhuizen_nav-cgb-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
		null, // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// Register block editor styles for backend.
	wp_register_style(
		'veldhuizen_nav-cgb-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);

	// WP Localized globals. Use dynamic PHP stuff in JavaScript via `cgbGlobal` object.
	wp_localize_script(
		'veldhuizen_nav-cgb-block-js',
		'cgbGlobal', // Array containing dynamic data for a JS Global.
		[
			'pluginDirPath' => plugin_dir_path( __DIR__ ),
			'pluginDirUrl'  => plugin_dir_url( __DIR__ ),
			// Add more data here that you want to access from `cgbGlobal` object.
		]
	);

	/**
	 * Register Gutenberg block on server-side.
	 *
	 * Register the block on server-side to ensure that the block
	 * scripts and styles for both frontend and backend are
	 * enqueued when the editor loads.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type#enqueuing-block-scripts
	 * @since 1.16.0
	 */
	register_block_type(
		'cgb/block-veldhuizen-nav', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'veldhuizen_nav-cgb-style-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'veldhuizen_nav-cgb-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'veldhuizen_nav-cgb-block-editor-css',
			'render_callback' => 'render_veldhuizen_block',
		)
	);
	
	register_block_type(
		'cgb/veldhuizen-nav-container', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'veldhuizen_nav-cgb-style-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'veldhuizen_nav-cgb-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'veldhuizen_nav-cgb-block-editor-css',
			'render_callback' => 'veldhuizen_nav_container',
		)
	);

	register_block_type(
		'cgb/veldhuizen-intro', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'veldhuizen_nav-cgb-style-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'veldhuizen_nav-cgb-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'veldhuizen_nav-cgb-block-editor-css',
			'render_callback' => 'veldhuizen_intro',
		)
	);

	register_block_type(
		'cgb/veldhuizen-banner', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'veldhuizen_nav-cgb-style-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'veldhuizen_nav-cgb-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'veldhuizen_nav-cgb-block-editor-css',
			'render_callback' => 'veldhuizen_banner',
		)
	);

	register_block_type(
		'cgb/veldhuizen-slider', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'veldhuizen_nav-cgb-style-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'veldhuizen_nav-cgb-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'veldhuizen_nav-cgb-block-editor-css',
			'render_callback' => 'veldhuizen_slider',
		)
	);

	register_block_type(
		'cgb/veldhuizen-product', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'veldhuizen_nav-cgb-style-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'veldhuizen_nav-cgb-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'veldhuizen_nav-cgb-block-editor-css',
			'render_callback' => 'veldhuizen_product',
		)
	);

	register_block_type(
		'cgb/veldhuizen-product-grid', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'veldhuizen_nav-cgb-style-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'veldhuizen_nav-cgb-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'veldhuizen_nav-cgb-block-editor-css',
			'render_callback' => 'veldhuizen_product_grid',
		)
	);


	register_block_type(
		'cgb/veldhuizen-product-contact', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'veldhuizen_nav-cgb-style-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'veldhuizen_nav-cgb-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'veldhuizen_nav-cgb-block-editor-css',
			'render_callback' => 'veldhuizen_product_contact',
		)
	);

	register_block_type(
		'cgb/block-veldhuizen-product-information', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'veldhuizen_nav-cgb-style-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'veldhuizen_nav-cgb-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'veldhuizen_nav-cgb-block-editor-css',
			'render_callback' => 'veldhuizen_product_information',
		)
	);

	register_block_type(
		'cgb/block-veldhuizen-product-footer', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'veldhuizen_nav-cgb-style-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'veldhuizen_nav-cgb-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'veldhuizen_nav-cgb-block-editor-css',
			'render_callback' => 'veldhuizen_product_footer',
		)
	);

	register_block_type(
		'cgb/block-veldhuizen-container-block', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'veldhuizen_nav-cgb-style-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'veldhuizen_nav-cgb-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'veldhuizen_nav-cgb-block-editor-css',
			'render_callback' => 'veldhuizen_container_block',
		)
	);

	register_block_type(
		'cgb/block-veldhuizen-verhuur-table', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'veldhuizen_nav-cgb-style-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'veldhuizen_nav-cgb-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'veldhuizen_nav-cgb-block-editor-css',
			'render_callback' => 'veldhuizen_verhuur_table',
		)
	);

	register_block_type(
		'cgb/block-veldhuizen-verhuur-container', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'veldhuizen_nav-cgb-style-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'veldhuizen_nav-cgb-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'veldhuizen_nav-cgb-block-editor-css',
			'render_callback' => 'veldhuizen_verhuur_container_block',
		)
	);
}

include 'frontend/nav-block.php';
include 'frontend/nav-container.php';
include 'frontend/intro.php';
include 'frontend/banner.php';
include 'frontend/slider.php';
include 'frontend/product.php';
include 'frontend/product-grid.php';
include 'frontend/product-contact.php';
include 'frontend/product-information.php';
include 'frontend/product-footer.php';
include 'frontend/container-block.php';
include 'frontend/verhuur-table.php';
include 'frontend/verhuur-container.php';

// Hook: Block assets.
add_action( 'init', 'veldhuizen_nav_cgb_block_assets' );
