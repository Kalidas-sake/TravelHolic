<?php 

	

	$link = $_POST['googleLink'];


	$page = file_get_contents($link);

	$dom = new DOMDocument;

	libxml_use_internal_errors(true); 
	@$dom->loadHTML($page);
	libxml_clear_errors();

   

	$data = $dom->getElementsByTagName('meta');
	$t = '';
	$u = '';
	$i = '';
	foreach ($data as $date) {
		if ($date->getAttribute('property')==='og:title') {
			$t = $date->getAttribute('content');
		
		}
		if ($date->getAttribute('property')==='og:url') {
			$u = $date->getAttribute('content');
			
		}
		if ($date->getAttribute('property')==='og:image') {
			$i = $date->getAttribute('content');
			
		}
	}

	//$info = array('name' => $t, 'link' => $u, 'img' => $i );
	//header("Content-Type: application/javascript");
		
	//print_r($info);

	echo "$t,$u,$i";