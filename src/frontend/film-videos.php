<?php
function veldhuizen_film_videos($attributes){
	ob_start();

	$urlString = $attributes['videos'];
	$urlArray = explode(PHP_EOL, $urlString);
	$cleanArray = str_replace('https://www.youtube.com/watch?v=', '', $urlArray);
	foreach ($cleanArray as &$url) {
		$url = strstr($url, '&', true);
	}
	var_dump($cleanArray);
	
	foreach ($cleanArray as &$url) {
		echo '<figure class="iframe-wrapper">';
		echo '<iframe 
					width="575"
                    height="323.4375"
					src="https://www.youtube.com/embed/' . $url . '" 
					srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}.ytp-gradient-top{background-color:white !important}</style>" 
					frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                    ></iframe>';
		echo '</figure>';
	}
	

	// wp_enqueue_script( 'veldhuizen-lazy-loading', get_template_directory_uri() . '/js/iframeLazy.js', false, false );

	return ob_get_clean();
}

?>