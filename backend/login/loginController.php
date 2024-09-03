
<?php 

// VALIDATION
	$errorMSG = "";
	$email = $_POST['email'];
	$password = $_POST['password'];

	/* EMAIL */
	if (empty($_POST['email'])) {
    	$errorMSG .= "Email is required";
	} else if(!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    	$errorMSG .= "Invalid email format";
    	echo json_encode(['code'=>200, 'msg'=>$errorMSG, 'isOk'=>false]);
    	exit;
	}
	/* PASSWORD */
	if (empty($password)) {
    	$errorMSG = "Password is required";
    	echo json_encode(['code'=>200, 'msg'=>$errorMSG, 'isOk'=>false]);
    	exit;
	} 


// DATABASE VALIDATION
	if(empty($errorMSG)){
		$msg = "";

		include("../dbConnect/dbConnect.php");

		$query = "SELECT COUNT(*) FROM account WHERE username_ = '".$email."' AND password_ = '".$password."'";
		
		$result = mysqli_query($conn, $query);

		$row = mysqli_fetch_array($result);
		$isExist = $row[0];

		if ($isExist == 1) {	
			$msg = "SUCCESS LOGIN";


			$queryUserIdAndFullName = "SELECT user_datails.id_, concat(user_datails.fisrt_name_, ' ',user_datails.middle_name_, ' ', user_datails.last_name_) as full_name_, user_datails.role_id_,
				department.name_ as department_name_, department.dept_code_ 
				FROM user_datails 
				INNER JOIN department department ON user_datails.department_id_ = department.id_
				WHERE email_ = '".$email."'";



			$resultQueryUserIdAndFullName = mysqli_query($conn, $queryUserIdAndFullName);
			$rowResultQueryUserIdAndFullName = mysqli_fetch_array($resultQueryUserIdAndFullName);

			// Session Start
			session_start();
			// Set session variables
			$_SESSION['userId'] = $rowResultQueryUserIdAndFullName['id_'];
			$_SESSION['userFullName'] = $rowResultQueryUserIdAndFullName['full_name_'];
			$_SESSION['userRole'] = $rowResultQueryUserIdAndFullName['role_id_'];
			$_SESSION['userDepartmentName'] = $rowResultQueryUserIdAndFullName['department_name_'];
			$_SESSION['userDepartmentCode'] = $rowResultQueryUserIdAndFullName['dept_code_'];

			$pageDashBoard = "";
			if($_SESSION['userRole'] == 2){
				$pageDashBoard = "dashboard.html";
			} else if($_SESSION['userRole'] == 3) {
				$pageDashBoard = "user_dashboard.html";
			}
			echo json_encode(['code'=>200, 'msg'=>$msg, 'isOk'=>true, 'page'=>$pageDashBoard]);
		} else {
			$msg = "Invalid email or wrong password";
			echo json_encode(['code'=>200, 'msg'=>$msg, 'isOk'=>false]);
		}
		exit;
	} else {
		echo json_encode(['code'=>404, 'msg'=>$errorMSG]);	
		exit;
	}

?>