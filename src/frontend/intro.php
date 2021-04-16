<?php

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