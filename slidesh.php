<html>

<head>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        
        .load{
            animation: slide 2s;
        }
        
        .slider{
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            width: 100%;
            height: 300px;
            animation: slide 40s infinite;
        }
        
        .content{
            color: #fff;
            width: 100%;
            height: 300px;
            background-color: rgba(0,0,0,0.7);  
        }
        
        .principal{
            left: 50%;
            top: 20%;
            transform: translate(-50%,-50%);
            position: absolute;
            letter-spacing: 5px;
            text-align: center;
        }
        
        .principal h1{
            font-size: 70px;
            margin-bottom: 20px;
        }
        
        .principal p{
            font-size: 20px;
        }
        
        @keyframes slide{
            0%{
                background-image: url(img/slideshow/1.jpg);
            }
            20%{
                background-image: url(img/slideshow/1.jpg);
            }
            20.01%{
                background-image: url(img/slideshow/2.jpg);
            }
            40%{
                background-image: url(img/slideshow/2.jpg);
            }
            40.01%{
                background-image: url(img/slideshow/3.jpg);
            }
            60%{
                background-image: url(img/slideshow/3.jpg);
            }
            60.01%{
                background-image: url(img/slideshow/4.jpg);
            }
            80%{
                background-image: url(img/slideshow/4.jpg);
            }
            80.01%{
                background-image: url(img/slideshow/5.jpg);
            }
            100%{
                background-image: url(img/slideshow/5.jpg);
            }
            100.01%{
                background-image: url(img/slideshow/6.jpg);
            }
            120%{
                background-image: url(img/slideshow/6.jpg);
            }
        }
    
    </style>
</head>

<body>
    <div class="slider">
        <div class="load">

        </div>
        <div class="content">
            <div class="principal">
                <h1>WEBSITE</h1>
                <p>Hello friends, its sample slideshow.</p>
            </div>
        </div>
    </div>
</body>

</html>























     <?php
        require 'connection.php';
        $self = $_SERVER['PHP_SELF'];
        $rec_limit = 3;
        //count the number of records in database
        $count = mysqli_query($conn, "SELECT count(id) FROM newsletters");
        $row1 = mysqli_fetch_array($count, MYSQLI_NUM );
        $rec_count = $row1[0];

        //get page number parameter from url
        if( isset($_GET['page'] ) ) {
            $page = $_GET['page'] + 1;
            $offset = $rec_limit * $page ;
         }else {
            $page = 0;
            $offset = 0;
         }
         $left_rec = $rec_count - ($page * $rec_limit);


        $sql = "SELECT * FROM newsletters ORDER BY id DESC LIMIT $offset, $rec_limit ";
        $result = mysqli_query($conn, $sql);


        if (mysqli_num_rows($result) > 0) {
            // output data of each row

            while($row = mysqli_fetch_assoc($result)) {
                //echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
                $myTitle = $row['title'];
                $myDate = $row['date'];
                $myLocation = $row['location'];
                $myDescription = $row['about'];
                $myAlbumLink = $row['link'];
                $myPrev1 = $row['img1'];
                $myPrev2 = $row['img2'];
                ?>


                    <div class="heading">
                        <h2 class="text-uppercase">
                            <?php echo $myTitle; ?>
                        </h2>
                        <h5>At :
                            <?php echo $myLocation." ". $myDate; ?>
                        </h5>
                        <div class="img1">
                            <img src='<?php echo $myPrev1; ?>' width="300px" />
                            <img src='<?php echo $myPrev2; ?>' width="300px" /></br>
                        </div><br/>
                        <h4>About Trip..</h4>
                        <p style="text-align:justify">
                            <?php echo $myDescription; ?>
                        </p>
                        <a class="btnAlbum" href="sample.php">Show Album</a>
                    </div>
                    <img src="img/divider.png" />

                    <?php
            }
            ?>
                        <ul class="pagination" id="paging">

                            <?php
            if( $page > 0 ) {
            $last = $page - 2;
            echo "<li><a href = '$self?page=$last'>Last 3 Records</a></li> ";
            echo "<li><a href = '$self?page=$page'>Next 3 Records</a></li";

            }else if( $page == 0 ) {
               echo "<li><a href = '$self?page=$page'>Next 3 Records</a></li>";
            }else if( $left_rec < $rec_limit ) {
               $last = $page - 2;
               echo "<li><a href = '$self?page=$last'>Last 3 Records</a></li>";
            }

            } else {
                echo "0 results";
                echo "<br>Back to <a href = '$self'>home</a>";
            }
            ?>



                        </ul>
                        <?php
        mysqli_close($conn);
      ?>

