<?php

function veldhuizen_product_grid($attributes){
    ob_start();

    $title = $attributes['title'];

    $images = $attributes['imgArray'];

    echo "<section class='veldhuizen__container--product-grid'>";

     echo "<h1>" . $title . "</h1>";
         echo "<div class='product-grid-wrapper'>";
            echo "<img id='big-image' class='gallery-pictures' src='" . $images[0]['imgURL'] . "'onclick='openModal()' />";

            foreach ($images as $image) {
                echo "<img src='" . $image['imgURL'] . "' class='gallery-pictures' onmouseover='expandImage(this)' onclick='openModal(event)' />";
            }

        echo "</div>";

        echo '<div id="myModal" class="modal">';
            echo '<span class="close cursor" onclick="closeModal()">&times;</span>';
            echo '<a class="prev" onclick="nextSlide(-1)">&#10094;</a> <a class="next" onclick="nextSlide(1)">&#10095;</a>';
            // echo '<img src=' . $images[0]['imgURL'] . '>';
            echo '<img id="modal-image" src="">';
        echo '</div>';

    echo "</section>";


    wp_enqueue_script( 'veldhuizen-product-gallery', get_template_directory_uri() . '/js/galleryBehavior.js', false, false );

    return ob_get_clean();

}
?>
