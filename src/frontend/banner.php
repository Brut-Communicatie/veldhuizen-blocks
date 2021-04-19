<?php
function veldhuizen_banner($attributes){
    ob_start();

    echo '<div class="top__banner">';
    echo '<div class="top__content">';
    echo '<h1>';
    echo $attributes['title'];
    echo '</h1>';
    echo '</div>';
    echo '</div>';
    return ob_get_clean();
}