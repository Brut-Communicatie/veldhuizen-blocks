<?php

function veldhuizen_product_footer($attributes) {

    // $items = $attributes['products'][0]['productId'];
    $items = $attributes['products'];

    // function randomProduct($items) {
    //     return rand(0, count($items));
    // }

    ob_start();
    global $post;
    $next = get_next_post();
    $prev = get_previous_post();

    $nextLink = get_permalink( $next->ID );
    $prevLink = get_permalink( $prev->ID );

    echo '<div class="veldhuizen__container--product-footer no-print">';
    echo '<a class="footer-links" href="'. $prevLink .'">' . '<   ' . "Vorige product". '</a>';           // $prev->post_title
    echo '<a class="footer-links" href="'. $nextLink .'">' . "Volgende product" . '   >'. '</a>';            // $next->post_title
    echo '</div>';
    
    return ob_get_clean();
}

?>
