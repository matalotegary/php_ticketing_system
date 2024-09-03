<?php

	include("../dbConnect/dbConnect.php");
	try {
		$id = $_POST['id'];

		$querySelect = "SELECT * FROM lr_form WHERE id_ = ".$id.";";
		$result = mysqli_query($conn, $querySelect);

		$allRequest = array();
		while ($row = $result->fetch_object()) {
			array_push($allRequest, $row);
		}

		session_start();

		$msg = 'Succes fetch data';
		// add the data insinde json_encode
		echo json_encode(['code'=>200, 'msg'=>$msg, 'isOk'=>true, 'data'=>$allRequest, 'id'=>$id,
			'query'=>$querySelect,'userRole'=>$_SESSION['userRole']]);
	} catch(Exception $e) {
		$msg =  ''.$e -> getMessage();
		echo json_encode(['code'=>200, 'msg'=>$msg, 'isOk'=>false]);
	}

?>