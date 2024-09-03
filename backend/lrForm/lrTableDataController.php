<?php 

	include("../dbConnect/dbConnect.php");
	try {
		
		$queryGetAllRequest = "SELECT ".
								"id_ as id, requestor_ as requestor, support_ as support,".
								"lr_req_title_ as title, date_opened_ as dateOpened, date_required_ as dateRequired, status_ as status ".
								"FROM lr_form WHERE 1=1 ";
		if (isset($_GET["key"])) {
			if(!is_null($_GET["key"])) {
				$key = $_GET["key"];
				if(!empty($key)){
					$queryGetAllRequest = $queryGetAllRequest . " AND status_ = '" . $key. "'";
				}
			}
		}
		
		
		session_start();
		if (isset($_SESSION["userRole"])){
			// if userRole is 3 then the  user is not admin
			if ($_SESSION["userRole"] == 3) {
				$queryGetAllRequest = $queryGetAllRequest . " AND requestor_ = '" .$_SESSION["userFullName"]."'";
			} 
		}
		
		
		//echo $queryGetAllRequest;
		
		$result = mysqli_query($conn, $queryGetAllRequest);

		$allRequest = array();
		while ($row = $result->fetch_object()) {
			array_push($allRequest, $row);
		}
		
		$msg = 'Succes fetch data';
		echo json_encode(['code'=>200, 'msg'=>$msg, 'isOk'=>true, 'data'=>$allRequest]);
	} catch(Exception $e) {
		$msg =  ''.$e -> getMessage();
		echo json_encode(['code'=>200, 'msg'=>$msg, 'isOk'=>false]);
	}
	
?>