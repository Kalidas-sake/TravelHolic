<?php

      $varTitle = $_POST['title'];
      $varDate = $_POST['date'];
      $varLocation = $_POST['location'];
      $varDescription = $_POST['description'];
      $varAlbum = $_POST['albumlink'];
      $varImg1 = $_POST['img1'];
      $varImg2 = $_POST['img2'];

      require 'connection.php';
      $query = "INSERT INTO newsletters VALUES (null, '$varTitle', '$varDate', '$varLocation', '$varDescription', '$varAlbum', '$varImg1', '$varImg2')";
if(strlen($varTitle) != 0 && strlen($varDate) != 0 && strlen($varLocation) != 0){
      if (mysqli_query($conn, $query) ) {
        echo '1';
      }
      else{
        echo "Please enter Valid data.";
      }
}
else{
    echo '0';
}

      mysqli_close($conn);
 ?>
