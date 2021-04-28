<?php

function veldhuizen_product_grid($attributes){
    ob_start();

    $title = $attributes['title'];

    $images = $attributes['imgArray'];

    echo "<section class='veldhuizen__container--product-grid'>";

    echo "<h1>" . $title . "</h1>";
    echo "<div class='product-grid-wrapper'>";
    echo "<img id='big-image' src='" . $images[0]['imgURL'] . "' />";

    foreach ($images as $image) {
        echo "<img src='" . $image['imgURL'] . "' class='gallery-pictures' onclick='expandImage(this)'/>";
    }

    echo "</div>";
    echo "</section>";

    // echo "<script type='text/Javascript' src='behavior.js'></script>";

    wp_enqueue_script( 'veldhuizen-product-gallery', get_template_directory_uri() . '/js/galleryBehavior.js', false, false );

    return ob_get_clean();

}
?>
