<?php

function veldhuizen_product_grid($attributes){
    ob_start();

    echo '<h1>';
    echo 'HALLO';
    echo '</h1>';
    return ob_get_clean();
}