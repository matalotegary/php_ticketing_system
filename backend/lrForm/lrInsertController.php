<?php 
	include("../dbConnect/dbConnect.php");


	try{
	
		session_start();

		$lrReqTitle = $_POST['lrReqTitle'];
		$requestor_lr = $_SESSION['userFullName'];
		$strategy_lr = $_SESSION['userDepartmentCode'];
		$ple_prj_lr = $_POST['ple_prj_lr'];
		$generic_lr = $_POST['generic_lr'];
		$inputPriority_lr = $_POST['inputPriority_lr'];
		$date_opened_lr = $_POST['date_opened_lr'];
		$date_required_lr = $_POST['date_required_lr'];
		$start_time_lr = $_POST['start_time_lr'];
		$mobile_number_lr = $_POST['mobile_number_lr'];
		$lr1 = $_POST['lr1'];
		$other_req1_lr = $_POST['other_req1_lr'];
		$material1_lr = $_POST['material1_lr'];
		$other_mat1_lr = $_POST['other_mat1_lr'];
		$notes1_lr = $_POST['notes1_lr'];
		$lr2 = $_POST['lr2'];
		$other_req2_lr = $_POST['other_req2_lr'];
		$material2_lr = $_POST['material2_lr'];
		$other_mat2_lr = $_POST['other_mat2_lr'];
		$notes2_lr = $_POST['notes2_lr'];
		$lr3 = $_POST['lr3'];
		$other_req3_lr = $_POST['other_req3_lr'];
		$material3_lr = $_POST['material3_lr'];
		$other_mat3_lr = $_POST['other_mat3_lr'];
		$notes3_lr = $_POST['notes3_lr'];
		$lr4 = $_POST['lr4'];
		$other_req4_lr = $_POST['other_req4_lr'];
		$material4_lr = $_POST['material4_lr'];
		$other_mat4_lr = $_POST['other_mat4_lr'];
		$notes4_lr = $_POST['notes4_lr'];
		$lr5 = $_POST['lr5'];
		$other_req5_lr = $_POST['other_req5_lr'];
		$material5_lr = $_POST['material5_lr'];
		$other_mat5_lr = $_POST['other_mat5_lr'];
		$notes5_lr = $_POST['notes5_lr'];
		$special_instructions_lr = $_POST['special_instructions_lr'];


		$queryInsert = "insert into lr_form(status_,lr_req_title_,requestor_,strategy1_,ple_prj_,generic_,inputPriority_,date_opened_,date_required_,start_time_,mobile_number_,lr1,other_req1_,material1_,other_mat1_,notes1_,lr2,other_req2_,material2_,other_mat2_,notes2_,lr3,other_req3_,material3_,other_mat3_,notes3_,lr4,other_req4_,material4_,other_mat4_,notes4_,lr5,other_req5_,material5_,other_mat5_,notes5_,special_instructions_) values('REQUEST REVIEW','".$lrReqTitle."','".$requestor_lr."','".$strategy_lr."','".$ple_prj_lr."','".$generic_lr."','".$inputPriority_lr."','".$date_opened_lr."','".$date_required_lr."','".$start_time_lr."','".$mobile_number_lr."','".$lr1."','".$other_req1_lr."','".$material1_lr."','".$other_mat1_lr."','".$notes1_lr."','".$lr2."','".$other_req2_lr."','".$material2_lr."','".$other_mat2_lr."','".$notes2_lr."','".$lr3."','".$other_req3_lr."','".$material3_lr."','".$other_mat3_lr."','".$notes3_lr."','".$lr4."','".$other_req4_lr."','".$material4_lr."','".$other_mat4_lr."','".$notes4_lr."','".$lr5."','".$other_req5_lr."','".$material5_lr."','".$other_mat5_lr."','".$notes5_lr."','".$special_instructions_lr."')";


		$sql = mysqli_query ($conn, $queryInsert);
		$msg = 'New Request Submitted';
		echo json_encode(['code'=>200, 'msg'=>$msg, 'isOk'=>true, 'data'=>$queryInsert]);

	} catch(Exception $e) {
		$msg =  ''.$e -> getMessage();
		echo json_encode(['code'=>200, 'msg'=>$msg, 'isOk'=>false]);
	}

?>