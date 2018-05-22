<?php
include('dbConnect.php');

$post = file_get_contents("php://input");
$post = json_decode($post, TRUE);

$post['customerId'] = $db->real_escape_string($post['customerId']);
$post['name'] = $db->real_escape_string($post['name']);
$post['email'] = $db->real_escape_string($post['email']);
$post['phone'] = $db->real_escape_string($post['phone']);
$post['vehicle'] = $db->real_escape_string($post['vehicle']);
$post['year'] = $db->real_escape_string($post['year']);
$post['plate'] = $db->real_escape_string($post['plate']);
$post['referrer'] = $db->real_escape_string($post['referrer']);

$result = $db->query("INSERT INTO promotion (date, customerId, name, email, phone, vehicle, year, plate, referrer)
                        VALUES (NOW(), '" . $post['customerId'] . "', '" . $post['name'] . "', '" . $post['email'] . "', '" . $post['phone'] . "', '" . $post['vehicle'] . "', '" . $post['year'] . "',
                                '" . $post['plate'] . "', '" . $post['referrer'] . "');");
header('Content-Type: application/json');
if (!$db->errno) {
    echo '{
        "result":"success"
    }';
}else{
    echo '{
        "result":"error"
    }';
}
$db->close();
