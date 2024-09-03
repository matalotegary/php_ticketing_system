<?php
	include("../dbConnect/dbConnect.php");

		$id=$_POST['id_lr_view'];
		$lrReqTitle = $_POST['lrReqTitle'];
		$requestor_lr = $_POST['requestor_lr'];
		$strategy_lr = $_POST['strategy_lr'];
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

		$sql = "UPDATE `lr_form` 
		SET `lrReqTitle`='$lrReqTitle',
		`requestor_lr`='$requestor_lr',
		`strategy_lr`='$strategy_lr',
		`ple_prj_lr`='$ple_prj_lr',
		`generic_lr`='$generic_lr',
		`inputPriority_lr`='$inputPriority_lr',
		`date_opened_lr`='$date_opened_lr',
		`date_required_lr`='$date_required_lr',
		`start_time_lr`='$start_time_lr',
		`mobile_number_lr`='$mobile_number_lr',
		`lr1`='$lr1',
		`other_req1_lr`='$other_req1_lr',
		`material1_lr`='$material1_lr',
		`other_mat1_lr`='$other_mat1_lr',
		`notes1_lr`='$notes1_lr',
		`lr2`='$lr2',
		`other_req2_lr`='$other_req2_lr',
		`material2_lr`='$material2_lr',
		`notes2_lr`='$notes2_lr',
		`lr3`='$lr3',
		`lr4`='$lr4',
		`other_req4_lr`='$other_req4_lr',
		`material4_lr`='$material4_lr',
		`other_mat4_lr`='$other_mat4_lr',
		`notes4_lr`='$notes4_lr',
		`lr5`='$lr5',
		`other_req5_lr`='$other_req5_lr',
		`material5_lr`='$material5_lr',
		`notes5_lr`='$notes5_lr',
		`special_instructions_lr`='$special_instructions_lr' WHERE id_=$id";



	if (mysqli_query($conn, $sql)) {
		echo json_encode(array("statusCode"=>200));
	} 
	else {
		echo json_encode(array("statusCode"=>201));
	}
	mysqli_close($conn);
?>