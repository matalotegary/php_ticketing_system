<?php
	session_start();
	$msg = '';

	header('Content-type: application/json; charset=UTF-8');
	
	if(
		isset($_SESSION["userFullName"]) && 
		isset($_SESSION["userId"]) && 
		isset($_SESSION["userRole"] &&
		isset($_SESSION["userDepartmentName"] &&
		isset($_SESSION["userDepartmentCode"] 
	)
	){
		$data = '{"userId":"'.$_SESSION["userId"].'", "userFullName":"'.$_SESSION["userFullName"].'", "role":"'.$_SESSION["userRole"].', "userDepartmentName":"'.$_SESSION["userDepartmentName"].'", "userDepartmentCode":"'.isset($_SESSION["userDepartmentCode"].'"}';
		$msg = 'user user session is found';
		echo json_encode(array('code'=>200, 'msg'=>$msg, 'isOk'=>true, 'data'=>$data));
	}

	if (empty($msg)) {
		$msg = 'No session found. Please go to login page';
		echo json_encode(array('code'=>200, 'msg'=>$msg, 'isOk'=>false));
	}

	exit();
?>