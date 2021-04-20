<?php

function veldhuizen_productcontainer($attributes, $content){
    ob_start();
    echo '<div class="product">';
    echo '<h2>';
    the_title();
    echo '</h2>';
    echo $content;
    echo '</div>';
    return ob_get_clean();
}

function veldhuizen_product($attributes, $content){
    $obj = $content;
    // print_r($content);   
    ob_start();
    echo '<h3>';
    echo 'Productinformatie';
    echo '</h3>';
    echo $content;
    return ob_get_clean();
}