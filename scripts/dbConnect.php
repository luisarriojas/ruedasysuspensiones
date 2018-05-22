<?php
$environment = "dev";
include("dbParams1.php");
$db = new mysqli($server1, $user1, $pwd1, $db1);

if (!$db->connect_errno) {
	$db->set_charset("utf8");
}else{
	$db->close();
}
