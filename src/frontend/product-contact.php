<?php

function veldhuizen_product_contact() {
    ob_start();
    echo "<div class='veldhuizen__container--product-contact'>";
    echo "<button>Neem contact op</button>";
    echo "</div>";

    return ob_get_clean();
}