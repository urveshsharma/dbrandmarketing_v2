<?php

	header("Access-Control-Allow-Origin: *");
	require_once ('dbConnection.php'); //Database connection

	$username = $conn->real_escape_string($_POST['username']);
	$email = $conn->real_escape_string($_POST['email']);
	$phone = $conn->real_escape_string($_POST['phone']);
    $address = $conn->real_escape_string($_POST['address']);
    $sellerType = $conn->real_escape_string($_POST['sellerType']);
    $product = $conn->real_escape_string($_POST['product']);

	$userData = array();
	$userData['sellRegData'] = array();
	$userData['sellRegData']['username'] = $username;
	$userData['sellRegData']['email'] = $email;
	$userData['sellRegData']['phone'] = $phone;
    $userData['sellRegData']['address'] = $address;
    $userData['sellRegData']['sellerType'] = $sellerType;
    $userData['sellRegData']['product'] = $product;

	if($_POST)
	{
		$sql_userQuery = "CALL insertINTOsellerreg('$username', '$email', '$phone', '$address', '$sellerType', '$product')";
		if (!$conn->query($sql_userQuery)){
			echo json_encode($conn -> error);
		}else {
			echo json_encode($userData);
		}


		        // Always set content-type when sending HTML email
		        $headers = "MIME-Version: 1.0" . "\r\n";
		        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

		        // More headers
		        $headers .= 'From:'.$email . "\r\n";
		        //$headers .= 'Cc: sheik@nanosoftengineers.com' . "\r\n";

		        /*################## Send EMAIL to ADMIN ################### */
		        $to = "idigitalbrandmarketing@gmail.com";
		        $subject = "Opportunity to advertise on My Online Shop Facebook Group - ".$username;

		        $message = "
		        <html>
		        <head>
		        <title>Opportunity to advertise on My Online Shop Facebook Group</title>
		        </head>
		        <body>
		        <div>
		        <p>A request has been registered for advertising on My Online Shop Facebook group.</p>
		        <p>Name: ".$username."</p>
		        <p>Email: ".$email."</p>
		        <p>Phone: ".$phone."</p>
		        <p>Address: ".$address."</p>
		        <p>Seller Type: ".$sellerType."</p>
		        <p>Products: ".$product."</p>
		        </div>
		        </body>
		        </html>
		        ";

		        mail($to, $subject, $message, $headers);
        /*################## Send EMAIL to ADMIN ################### */

	}else{
	  echo json_encode('Data is not received');
	}



?>