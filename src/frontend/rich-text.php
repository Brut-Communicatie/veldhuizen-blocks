<?php 
function veldhuizen_rich_text($attributes) {
    ob_start();

	echo '<div class="veldhuizen-rich-text-wrapper">';
	// var_dump($attributes['content']);
	echo $attributes['content'];
	echo '</div>';
	
	return ob_get_clean();
}
?>