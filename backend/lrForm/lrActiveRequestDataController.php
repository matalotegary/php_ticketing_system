<?php
	include("../dbConnect/dbConnect.php");
	
	try{


		$id = $_POST['id_lr_view'];
		//$queryAcknowledge= "UPDATE `lr_form` 
		//SET `status_`='ACKNOWLEDGED REQUEST'
		 //WHERE id_= '".$id."'";
		 $queryAcknowledge = "UPDATE lr_form SET status_='ACTIVE REQUESTS' WHERE id_= '".$id."'";
		$sql = mysqli_query ($conn, $queryAcknowledge);
		$msg = 'Request is now Active/Ongoing';
		echo json_encode(['code'=>200, 'msg'=>$msg, 'isOk'=>true, 'data'=>$queryAcknowledge]);
		
	} catch(Exception $e) {
		$msg =  ''.$e -> getMessage();
		echo json_encode(['code'=>200, 'msg'=>$msg, 'isOk'=>false]);
	}
?> 