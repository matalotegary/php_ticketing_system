<?php
	include("../dbConnect/dbConnect.php");
	
	try{

		session_start();
		$support = $_SESSION['userFullName'];
		$id = $_POST['id_lr_view'];

		 $queryAcknowledge = "UPDATE lr_form SET status_='ACKNOWLEDGED REQUEST', support_='".$support."' WHERE id_= '".$id."'";
	    	$sql = mysqli_query ($conn, $queryAcknowledge);
				$msg = 'Request has been Acknowledged';
		echo json_encode(['code'=>200, 'msg'=>$msg, 'isOk'=>true, 'data'=>$queryAcknowledge]);
		
	} catch(Exception $e) {
		$msg =  ''.$e -> getMessage();
		echo json_encode(['code'=>200, 'msg'=>$msg, 'isOk'=>false]);
	}
?> 