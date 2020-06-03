<?php

require_once ('dbConfig.php');

$conn = new mysqli($servername, $username, $password, $dbname, $port);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    error_log('FAILURE, DB Connection failed');
}else{
    error_log('SUCCESS, DB Connected successfully');
}
?>