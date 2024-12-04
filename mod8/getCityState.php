<?php
$cityState = array(
    "95490" => "Willits, California",
    "94112" => "San Francisco, California"
);

header("Content-Type: text/plain");
$zip = $_GET["zip"];
if (array_key_exists($zip, $cityState))
    print $cityState[$zip];
else
    print "zip code error, zip code error";
?>