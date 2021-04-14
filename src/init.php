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
}

function render_veldhuizen_block( $attributes ){
	$link = $attributes['link'];
	$image = $attributes['image'];
	$title = $attributes['title'];

	ob_start(); 

	echo '<a class="block" href="'. $link .'">';
	echo '<img src="'. $image .'" alt="Afbeelding van '. $title .'" />';
	echo '<div class="block__info">';
	echo '<div class="block__square"></div>';
	echo '<h5>';
	echo $attributes['title'];
	echo '</h5>';
	echo '<p>lees meer <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></p>';
	echo '</div>';
	echo '</a>';
	
	return ob_get_clean();


}

function veldhuizen_nav_container($attributes, $content){
	ob_start();
	echo '<div class="veldhuizen__container">';
	echo $content;
	echo '</div>';
	return ob_get_clean();
}

function veldhuizen_intro($attributes) {
	$title = $attributes['title'];
	$content = $attributes['content'];
	ob_start();
	
	echo '<div class="veldhuizen__container--intro">';
	echo '<h2>' . $title . '</h2>';
	echo '<p>' . $content . '</p>';
	echo '</div>';
	return ob_get_clean();
}

// Hook: Block assets.
add_action( 'init', 'veldhuizen_nav_cgb_block_assets' );
