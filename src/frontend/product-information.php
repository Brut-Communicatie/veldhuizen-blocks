<?php

function veldhuizen_product_information($attributes) {

    $title = $attributes['title'];
    $raw_content = $attributes['content'];
    $clean_content = nl2br($raw_content);

    ob_start();

    echo '<div class="veldhuizen__container--product-info">';
	echo '<h2>' . $title . '</h2>';
	echo '<p>' . $clean_content . '</p>';
	echo '</div>';
    
    return ob_get_clean();
}

?>