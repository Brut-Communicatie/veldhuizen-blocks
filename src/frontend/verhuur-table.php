<?php

function veldhuizen_verhuur_table($attributes, $content) {
    ob_start();
    echo $content;
    echo '<div class="print-button-wrapper">';
    echo '<button onclick="window.print();return false" class="no-print"><i class="fas fa-print"></i> Print lijst</button>';
    echo '</div>';
    return ob_get_clean();
}