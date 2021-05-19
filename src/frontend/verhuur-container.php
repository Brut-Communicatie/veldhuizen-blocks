<?php
function veldhuizen_verhuur_container_block($attributes, $content) {
    ob_start();

    // var_dump($content);
    // var_dump($attributes);
    echo $content;

    return ob_get_clean();
}