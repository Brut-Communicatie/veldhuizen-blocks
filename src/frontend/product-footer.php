<?php

function veldhuizen_product_footer($attributes) {
    global $post;
    var_dump('test 1');
    $parent = get_post_parent($post->ID);
    $post_type = $post->post_type;

    $args = array(
        'posts_per_page' => -1,
        'order'          => 'ASC',
        'post_parent'    => $parent->ID,
        'post_type'      => $post_type,
    );
    var_dump('test 2');

    $siblingArray = [];
    $siblings = get_children($args);
    var_dump('test 3');
    foreach($siblings as $sibling){
        $siblingArray[] = $sibling->ID;
    }
    var_dump('test 4');
    $currentKey = array_search($post->ID, $siblingArray);
    var_dump('test 5');
    $prevID = $siblingArray[$currentKey - 1] ? $siblingArray[$currentKey - 1] : $siblingArray[count($siblingArray) - 1];
    $nextID = $siblingArray[$currentKey + 1] ? $siblingArray[$currentKey + 1] : $siblingArray[0];
    var_dump('test 6');
    ob_start();
    echo '<div class="veldhuizen__container--product-footer no-print">';
    echo '<a class="footer-links" href="'. get_the_permalink( $prevID ) .'"><  Vorige product</a>';
    echo '<a class="footer-links" href="'. get_the_permalink( $nextID ) .'">Volgende product  ></a>';
    echo '</div>';

    return ob_get_clean();
}

?>
