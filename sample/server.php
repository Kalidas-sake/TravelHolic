<?php 

	include_once('connection.php');
	
		$varName = $_POST['name'];
		$varAge = $_POST['age'];
		$varAddr = $_POST['addr'];

		

		$sql = "INSERT INTO sample VALUES (null , '$varName' , $varAge, '$varAddr')";

		if(mysqli_query($conn, $sql)){
			echo "Record created";
		}
		else{
			echo $conn->error;
		}

 ?>
