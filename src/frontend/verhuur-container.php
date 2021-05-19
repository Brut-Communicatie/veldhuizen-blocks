<?php
function veldhuizen_verhuur_container_block($attributes, $content) {
    ob_start();
    echo '<div class="veldhuizen__container--verhuur-wrapper">';
    echo $content;
    echo '</div>';

    wp_enqueue_script( 'veldhuizen-verhuur-table', get_template_directory_uri() . '/js/verhuurTableBehavior.js', false, false );

    return ob_get_clean();
},