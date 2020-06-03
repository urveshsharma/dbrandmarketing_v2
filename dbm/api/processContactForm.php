<?php

	header("Access-Control-Allow-Origin: *");
	require_once ('dbConnection.php'); //Database connection

	$username = $conn->real_escape_string($_POST['username']);
	$email = $conn->real_escape_string($_POST['email']);
	$phone = $conn->real_escape_string($_POST['phone']);
	$query = $conn->real_escape_string($_POST['query']);

	$userData = array();
	$userData['userData'] = array();
	$userData['userData']['username'] = $username;
	$userData['userData']['email'] = $email;
	$userData['userData']['phone'] = $phone;
	$userData['userData']['query'] = $query;

	if($_POST)
	{
		$sql_userQuery = "CALL insertINTOuserquery('$username', '$email', '$phone', '$query')";
		if (!$conn->query($sql_userQuery)){
			echo json_encode($conn -> error);			
		}else {
			echo json_encode($userData);
		}
	}else{
	  echo json_encode('Data is not received');
	}



?>