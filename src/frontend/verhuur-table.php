<?php

function veldhuizen_verhuur_table($attributes, $content) {
    ob_start();
    echo $content;
    return ob_get_clean();
}