<?php
	
	include_once('./includes/json.php');
	include_once('./includes/bitly.php');

	$results = new json(); $results->status_code = 501;
	$token 	 = '345lk34hge3j53jgyj453453l09xj02323ooij2o';
	$domain  = 'bit.ly';	
	$link 	 = $_POST['link'];

	if($_POST['domain']) $domain = $_POST['domain'];
	if($link) $results = bitly_v3_shorten($link, $token, $domain);

	$Json = new json(); $Json->addContent(new arrayJson("result", $results));
	json_send($Json);

?>