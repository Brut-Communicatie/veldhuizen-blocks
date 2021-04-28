<?php

function veldhuizen_product_information($attributes) {

    $title = $attributes['title'];
    $raw_content = $attributes['content'];
    $clean_content = nl2br($raw_content);
    $producten = $attributes['products'];
    // $query = new WP_Query( array( 'post_type' => 'producten' ) );
    // $products = $query['posts'];

    ob_start();

    echo '<div class="veldhuizen__container--product-info">';
	echo '<h2>Productinformatie</h2>';
	echo '<p>' . $clean_content . '</p>';
	echo '<button onclick="window.print();return false"><i class="fas fa-print"></i> Print lijst</button>';
    
    echo '<p>' . $producten . '</p>';
    // echo '<footer>Heeeey</footer>';
    // var_dump($producten);

    
    
    // var_dump($products);
    // var_dump($query);
    
    echo '</div>';
    
    return ob_get_clean();
}

?>
