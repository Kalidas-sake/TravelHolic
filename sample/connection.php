<?php

$host = "localhost";
$user = "root";
$pass = "";


$conn = new mysqli($host, $user, $pass);

if ($conn->connect_error ) {
	die("MySQL Connection Failed.");
}
else{
	//echo "MySQL Connection Successfull. ";
	mysqli_select_db($conn,"myblog");
}
