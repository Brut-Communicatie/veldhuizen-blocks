<?php

function veldhuizen_product_footer($attributes) {
    var_dump('hallo');
    global $post;

    $parent = get_post_parent($post->ID);
    $post_type = $post->post_type;

    $args = array(
        'posts_per_page' => -1,
        'order'          => 'ASC',
        'post_parent'    => $parent->ID,
        'post_status'    => null,
        'post_type'      => $post_type,
    );

    $siblingArray = [];
    $siblings = get_children($args);

    foreach($siblings as $sibling){
        $siblingArray[] = $sibling->ID;
    }

    $currentKey = array_search($post->ID, $siblingArray);

    $prevID = $siblingArray[$currentKey - 1] ? $siblingArray[$currentKey - 1] : $siblingArray[count($siblingArray) - 1];
    $nextID = $siblingArray[$currentKey + 1] ? $siblingArray[$currentKey + 1] : $siblingArray[0];
    
    echo '<div class="veldhuizen__container--product-footer no-print">';

    ob_start();
    
    echo '<a class="footer-links" href="'. get_the_permalink( $prevID ) .'">' . '<   ' . "Vorige product". '</a>';
    echo '<a class="footer-links" href="'. get_the_permalink( $nextID ) .'">' . "Volgende product" . '   >'. '</a>';
    echo '</div>';

    return ob_get_clean();
}

?>
