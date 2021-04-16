<?php
function veldhuizen_nav_container($attributes, $content){
	ob_start();
	echo '<div class="veldhuizen__container">';
	echo $content;
	echo '</div>';
	return ob_get_clean();
}