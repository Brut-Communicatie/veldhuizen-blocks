<?php

function veldhuizen_product($attributes, $content){
    ob_start();
    echo $content;
    return ob_get_clean();
}