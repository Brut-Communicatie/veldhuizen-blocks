<?php 
function veldhuizen_rich_text($attributes) {
    ob_start();

	echo '<div class="veldhuizen-rich-text-wrapper">';
	// var_dump($attributes['content']);
	echo '<p>' . $attributes['content'] . '</p>';
	echo '</div>';
	
	return ob_get_clean();
}
?>