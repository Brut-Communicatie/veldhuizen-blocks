<?php
function veldhuizen_film_videos($attributes){
	ob_start();

	$urlString = $attributes['url'];
	$urlArray = explode(PHP_EOL, $urlString);
	$cleanArray = str_replace('https://www.youtube.com/watch?v=', '', $urlArray);
	foreach ($cleanArray as &$url) {
		$url = strstr($url, '&', true);
	}
	
	$videoTitles = $attributes['title'];
	
	foreach ($cleanArray as &$url) {
		echo '<div class="block" onclick="openIframe(event)">';
		// echo $url;
        echo '<img class="youtubeThumb" id="' . $url . '" src="https://img.youtube.com/vi/' . $url . '/0.jpg">';
        echo '<div class="block__info">';
        echo '<div class="block__square"></div>';
        echo '<h5>';
        echo $videoTitles;
        echo '</h5>';
        echo '<p>Open de video <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></p>';
        echo '</div>';
        echo '</div>'; 
	}
	wp_enqueue_script( 'veldhuizen-lazy-loading', get_template_directory_uri() . '/js/iframeLazy.js', false, false );

	return ob_get_clean();
}

?>