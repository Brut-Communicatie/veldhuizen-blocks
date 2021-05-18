<?php

function veldhuizen_product_footer($attributes) {

    // $items = $attributes['products'][0]['productId'];
    $items = $attributes['products'];

    // function randomProduct($items) {
    //     return rand(0, count($items));
    // }

    ob_start();

    echo '<div class="veldhuizen__container--product-footer no-print">';
    echo '<a className="footer-links">' . '<   ' . $items[rand(0, (count($items))-1)]['productTitle'] . '</a>';
    echo '<a className="footer-links">' . $items[rand(0, (count($items))-1)]['productTitle'] . '   >'. '</a>';
    echo '</div>';
    
    return ob_get_clean();
}

?>
