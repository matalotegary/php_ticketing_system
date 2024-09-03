<?php

	// echo  '<script>alert("DB SETUP CONNECTION")</script>';
	$SERVER = "localhost";
	$DB_USERNAME = "root";
	$DB_PASSWORD = "";

	$conn = "";
	$DB_NAME = "ticketing"; 

	try {
	  $conn = mysqli_connect($SERVER, $DB_USERNAME, $DB_PASSWORD, $DB_NAME);
	  // set the PDO error mode to exception
	  //echo "Connected successfully";

	} catch(Exception $e) {
		echo "Connection failed: " . $e -> getMessage();
	  	die();
	}

	// echo  '<script>alert("DB SETUP CONNECTION SUCCESS")</script>';

?>