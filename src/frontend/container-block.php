<?php
// include_once 'product-contact.php';

function veldhuizen_container_block($attributes) {
    var_dump("EWAAAAAAAAAAAAAAAAA");

    ob_start();

    echo '<div id="poeeeep">';
    echo '</div>';

    return ob_get_clean();
}
