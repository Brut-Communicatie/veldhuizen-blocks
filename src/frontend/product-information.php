<?php

function veldhuizen_product_information($attributes) {

    $title = $attributes['title'];
    $raw_content = $attributes['content'];
    $clean_content = nl2br($raw_content);
    $items = $attributes['products'];


    ob_start();

    echo '<div class="veldhuizen__container--product-info">';
	echo '<h2>Productinformatie</h2>';
	echo '<p>' . $clean_content . '</p>';
	echo '<button onclick="window.print();return false"><i class="fas fa-print"></i> Print lijst</button>';
    echo '</div>';
    
    return ob_get_clean();
}

?>
