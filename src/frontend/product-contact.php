<?php

function veldhuizen_product_contact() {
    ob_start();
    echo "<div class='veldhuizen__container--product-contact no-print'>";
    echo '<button id="productContactButton"><i class="fas fa-phone"></i>Neem contact op</button>';
    echo "</div>";

    return ob_get_clean();
}