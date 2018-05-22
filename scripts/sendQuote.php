<?php

$post = file_get_contents("php://input");
$post = json_decode($post, TRUE);

$content = 'Nombre: ' . $post['name'] . '
Email: ' . $post['email'] . '
Telefono: ' . $post['phone'] . '
Comentario: ' . $post['comment'];

$content = str_replace("\\n", " ", $content);
$content = str_replace("\'", "'", $content);
$content = str_replace('\"', '"', $content);

mail("totalrepair.consultas@gmail.com", $post['name'], $content, "From: ". $post['name'] . " <". $post['email'] .">");

