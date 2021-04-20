<?php

function veldhuizen_productcontainer($attributes, $content){
    ob_start();
    echo '<div>';
    echo $content;
    echo '</div>';
    return ob_get_clean();
}

function veldhuizen_product($attributes, $content){

    $obj = $content;
    // print_r($content);   

    ob_start();
    echo $content;
    return ob_get_clean();
}