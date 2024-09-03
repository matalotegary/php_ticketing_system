<?php

	include("../dbConnect/dbConnect.php");
	try {
		

		//$querySelect = "SELECT * FROM user_datails WHERE id_ = ".$id.";";
		$querySelect = "SELECT * FROM user_datails WHERE 1=1;
		$result = mysqli_query($conn, $querySelect);

		$allRequest = array();
		while ($row = $result->fetch_object()) {
			array_push($allRequest, $row);
		}

		$msg = 'Succes fetch data';
		// add the data insinde json_encode
		echo json_encode(['code'=>200, 'msg'=>$msg, 'isOk'=>true, 'data'=>$allRequest, 'id'=>$id, 'query'=>$querySelect]);
	} catch(Exception $e) {
		$msg =  ''.$e -> getMessage();
		echo json_encode(['code'=>200, 'msg'=>$msg, 'isOk'=>false]);
	}

?>