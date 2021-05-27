<?php

function veldhuizen_product_footer($attributes) {
  

    // global $post;
    global $wp_query;
    var_dump($wp_query);
    $post = $wp_query;
    $parent = get_post_parent($post->ID);
   
    $post_type = $post->post_type;

    $args = array(
        'posts_per_page' => -1,
        'order'          => 'ASC',
        'post_parent'    => $parent->ID,
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



    ob_start();
    echo '<div class="veldhuizen__container--product-footer no-print">';
    echo '<a class="footer-links" href="'. get_the_permalink( $prevID ) .'"><  Vorige product</a>';
    echo '<a class="footer-links" href="'. get_the_permalink( $nextID ) .'">Volgende product  ></a>';
    echo '</div>';

    return ob_get_clean();
}

?>
