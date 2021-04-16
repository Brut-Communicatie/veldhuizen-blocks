<?php
function veldhuizen_banner($attributes){
    ob_start();

    echo 'HALLO';
    return ob_get_clean();
}