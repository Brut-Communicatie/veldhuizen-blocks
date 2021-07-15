<?php

function veldhuizen_product_grid($attributes){
    ob_start();
    global $wp_query;
    $parentPost = get_post_parent($wp_query->post->ID);
    $parentLink = get_the_permalink($parentPost);
    
    $title = $attributes['title'];
    $images = $attributes['imgArray'];

    echo "<section class='veldhuizen__container--product-grid'>";

         echo "<div class='product-grid-wrapper'>";
            echo '<div id="big-image-wrapper">';
            echo "<img id='big-image' src='" . $images[0]['imgURL'] . "'onclick='openModal(event)' />";
            echo '</div>';
            foreach ($images as $image) {
                echo '<div class="gallery-pictures-wrapper no-print">';
                echo "<img src='" . $image['imgURL'] . "' class='gallery-pictures no-print' onmouseover='expandImage(this)' onclick='openModal(event)' />";
                echo '</div>';
            }
        echo "</div>";
        
        echo '<button onclick="window.print();return false" class="print-button no-print"><i class="fas fa-print"></i> Print lijst</button>';
        echo '<a href=".' . $parentLink .  '"><button  class="print-button no-print" id="back-overview-button">Terug naar overzicht</button></a>';

        echo '<div id="myModal" class="modal">';
            echo '<span class="close cursor" onclick="closeModal()">&times;</span>';
            echo '<a class="prev" onclick="previousSlide(-1)">&#10094;</a> <a class="next" onclick="nextSlide(1)">&#10095;</a>';
            echo '<img id="modal-image" src="">';
        echo '</div>';

    echo "</section>";


    wp_enqueue_script( 'veldhuizen-product-gallery', get_template_directory_uri() . '/js/galleryBehavior.js', false, false );

    return ob_get_clean();
}
?>
