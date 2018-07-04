<?php 

	

	$link = $_POST['googleLink'];
    //$link = 'https://photos.app.goo.gl/xCj45hzVu5chWpnn1';

	$page = file_get_contents($link);

	$dom = new DOMDocument;

	libxml_use_internal_errors(true); 
	@$dom->loadHTML($page);
	libxml_clear_errors();

   

	$imgLinks = $dom->getElementsByTagName('meta');
	foreach ($imgLinks as $imgLink) {
		if (preg_match("/lh3.googleusercontent.com/", $imgLink->getAttribute('content'))) {
			$img = $imgLink->getAttribute('content');
		
		}
	}

    $titles = $dom->getElementsByTagName('title');
	foreach ($titles as $title) {
        $arr = explode("-" , $title->nodeValue , 2);
        $myTitle = $arr[0];
        //echo $myTitle;
	}

echo $myTitle.','.$link .','.$img ;
