<?php
function veldhuizen_container_block($attributes, $content) {
    
    ob_start();
    echo '<div class="veldhuizen__container--product-wrapper">';
    echo $content;
    echo '</div>';

    return ob_get_clean();
}
