<?php 

	include("../dbConnect/dbConnect.php");

	try {
		
		$userRoleAndCondition = "";
		
		
		session_start();
		if (isset($_SESSION["userRole"])){
			// if userRole is 3 then the  user is not admin
			if ($_SESSION["userRole"] == 3) {
				$userRoleAndCondition = " AND requestor_ = '" .$_SESSION["userFullName"]."'";
			} 
		}
		
		
		$queryGetAllRequestReview = "SELECT COUNT(status_) FROM lr_form WHERE status_ = 'REQUEST REVIEW'".$userRoleAndCondition;
		$allRequestReview = mysqli_fetch_array(mysqli_query($conn, $queryGetAllRequestReview));
		$countAllRequestReview = $allRequestReview[0];

		$queryGetAllAcknowledgedRequest = "SELECT COUNT(status_) FROM lr_form WHERE status_ = 'ACKNOWLEDGED REQUEST'".$userRoleAndCondition;
		$allAcknowledgedRequest = mysqli_fetch_array(mysqli_query($conn, $queryGetAllAcknowledgedRequest));
		$countAllAcknowledgedRequest = $allAcknowledgedRequest[0];

		$queryGetAllActiveRequest = "SELECT COUNT(status_) FROM lr_form WHERE status_ = 'ACTIVE REQUESTS'".$userRoleAndCondition;
		$allActiveRequest = mysqli_fetch_array(mysqli_query($conn, $queryGetAllActiveRequest));
		$countAllActiveRequest = $allActiveRequest[0];

		$queryGetAllClosedRequest = "SELECT COUNT(status_) FROM lr_form WHERE status_ = 'CLOSED REQUESTS'".$userRoleAndCondition;
		$allClosedRequest = mysqli_fetch_array(mysqli_query($conn, $queryGetAllClosedRequest));
		$countAllClosedRequest = $allClosedRequest[0];

		$lrStatistics = '{"requestReview":"'.$countAllRequestReview.'",  "acknowledgedRequest":"'.$countAllAcknowledgedRequest.'", "activeRequest":"'.$countAllActiveRequest .'","closedRequest":"'.$countAllClosedRequest.'"}';

		$msg = 'Succes fetch data';
		echo json_encode(['code'=>200, 'msg'=>$msg, 'isOk'=>true, 'data'=>$lrStatistics]);
	} catch(Exception $e) {
		$msg =  ''.$e -> getMessage();
		echo json_encode(['code'=>200, 'msg'=>$msg, 'isOk'=>false]);
	}
	
	
?>