<?php

function veldhuizen_product_information($attributes) {

    $title = $attributes['title'];
    $raw_content = $attributes['content'];
    $clean_content = nl2br($raw_content);
    $items = $attributes['products'];


    ob_start();

    echo '<div class="veldhuizen__container--product-info">';
	echo '<h2>Productinformatie</h2>';
	echo '<p id="product-info">' . $clean_content . '</p>';
	echo '<button onclick="window.print();return false" class="no-print"><i class="fas fa-print"></i> Print lijst</button>';
    echo '</div>';

    wp_enqueue_script( 'veldhuizen-product-info', get_template_directory_uri() . '/js/productEuro.js', false, false );

    
    return ob_get_clean();
}

?>
