<?php
include_once 'product-information.php';
include_once 'product-contact.php';

function veldhuizen_container_block() {
    
    ob_start();

    echo '<div id="product_wrapper">';
    echo veldhuizen_product_information($attributes);
    echo veldhuizen_product_contact();
    echo '</div>';

    return ob_get_clean();
}
