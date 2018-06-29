<!DOCTYPE html>
<html lang="en">

<head>
    <title>Home | My TravelHolic Adventure</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="stylesheets/bootstrap.min.css">
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
    <link rel="stylesheet" href="popupstyle.css">
    <script src="scripts/jquery.min.js"></script>
    <script src="scripts/bootstrap.min.js"></script>
    <script src="scripts/scroll.js"></script>

    <style>
        .load {
            animation: slide 2s;
        }

        .slider {
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            width: 100%;
            height: 300px;
            animation: slide 40s infinite;
        }

        .content {
            color: #fff;
            width: 100%;
            height: 300px;
            background-color: rgba(0, 0, 0, 0.5);
        }

        .principal {
            left: 50%;
            top: 20%;
            transform: translate(-50%, -50%);
            position: absolute;
            letter-spacing: 3px;
            text-align: center;
        }

        .principal h1 {
            font-size: 50px;
            margin-bottom: 20px;
        }

        .principal p {
            font-size: 20px;
        }

        @keyframes slide {
            0% {
                background-image: url(img/slideshow/1.jpg);
            }
            20% {
                background-image: url(img/slideshow/1.jpg);
            }
            20.01% {
                background-image: url(img/slideshow/2.jpg);
            }
            40% {
                background-image: url(img/slideshow/2.jpg);
            }
            40.01% {
                background-image: url(img/slideshow/3.jpg);
            }
            60% {
                background-image: url(img/slideshow/3.jpg);
            }
            60.01% {
                background-image: url(img/slideshow/4.jpg);
            }
            80% {
                background-image: url(img/slideshow/4.jpg);
            }
            80.01% {
                background-image: url(img/slideshow/5.jpg);
            }
            100% {
                background-image: url(img/slideshow/5.jpg);
            }
            100.01% {
                background-image: url(img/slideshow/6.jpg);
            }
            120% {
                background-image: url(img/slideshow/6.jpg);
            }
        }


        #noData {
        
        }

    </style>
</head>

<body>

    <div class="text-center slider" id="show" style="margin-bottom:0 ">
        <div class="load"></div>
        <div class="content">
            <div class="principal">
                <h1 class="mainTitle">My TravelHolic Adventure</h1>
                <p class="quote">"Journeys end in lovers meeting." <small>-William Shakespeare</small></p>
            </div>
        </div>
    </div>

    <nav class="navbar navbar-inverse" id="mynavbar">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
                <a class="navbar-brand" href="#">TravelHolic</a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="#">Home</a></li>
                    <li><a href="gallery.php">Photo Gallery</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container" id="main-container">
        <div class="row">
            <div class="col-sm-4 aboutcol">
                <h2>About Me</h2>
                <h5>Photo of me:</h5>
                <div class="fakeimg" id="aboutme">
                    <img class="aboutimg" src="img/me.jpg" height="200px">
                </div>
                <p style="text-align: justify">Mr. Kalidas G. Sake</br>
                    Computer Engineer (SKN Sinhagad)</br>
                    Mo. 8605337565</p>
                <h3>Some Links</h3>
                <p>Lorem ipsum dolor sit ame.</p>
                <ul class="nav nav-pills nav-stacked">
                    <li class="active"><a href="#">Link 1</a> </li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Link 3</a></li>
                    <!--li><button id="myBtn">Open Modal</button></li-->
                </ul>
                <hr class="hidden-sm hidden-md hidden-lg">
            </div>


            <!-- The Modal -->
            <div id="myModal" class="modal">

                <!-- Modal content -->
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <h3 class="model-heading text-center">Create New Journey Timeline</h3>

                    <form id="myForm" action="savenews.php" method="post">

                        <table class="col-sm-4 formbox">
                            <tr>
                                <td><label>Title :</label></td>
                                <td><input type="text" name="title" id="titletext" required></td>
                            </tr>
                            <tr>
                                <td><label>Date/Time :</label></td>
                                <td><input type="date" name="date" required></td>
                            </tr>
                            <tr>
                                <td><label> Location :</label></td>
                                <td><input type="text" name="location" required></td>
                            </tr>
                            <tr>
                                <td><label>About event :</label></td>
                                <td><textarea type="text" name="description"></textarea></td>
                            </tr>
                            <tr>
                                <td><label>Album link :</label></td>
                                <td><input type="text" name="albumlink" id="glink" required></td>
                            </tr>
                            <tr>
                                <td><label>Prev img1 :</label></td>
                                <td><input type="text" name="img1" id="previmg1"></td>
                            </tr>
                            <tr>
                                <td><label>Prev img2 :</label></td>
                                <td><input type="text" name="img2" id="previmg2"></td>
                            </tr>
                            <tr>
                                <td><button id="sub">Save</button></td>
                                <td><button class="formBtn" id="">Cancel</button></td>
                            </tr>
                        </table>

                    </form>
                    <div class="col-sm-8 text-center">
                        <form action="parse.php" method="post" id="form2">
                            Paste Google Photos album link here <br/><input type="text" name="googleLink" id="lnk">
                            <button id="btnEnter" class="btn btn-primary">ENTER</button><br/><br/>
                        </form>
                        <p>Preview Images</p>
                        <div class="prev1" id="prev1div">

                        </div>
                        <div class="prev2" id="prev2div">

                        </div>
                        <button class="btn btn-primary" id="imgLoad" onclick="loadImageFunction()">Load Images</button><br> Click <a href="https://photos.google.com/albums" target="_blank">here </a>to create photos Album link. <br> Click <a href="https://ctrlq.org/google/photos/" target="_blank">here </a>to create photos embed code.
                    </div>
                </div>

            </div>



            <div class="col-sm-8">

                <div class="col-sm-4" id="noData">
                    <h3>Sorry..! Nothing to show.</h3>
                </div>
                <?php

                require 'connection.php';

                //define results per page
                $results_per_page = 3;

                //find out no of results stored in database
                $sql = "SELECT * FROM newsletters";
                $result = mysqli_query($conn, $sql);
                $number_of_results = mysqli_num_rows($result);

                //determine no of total pages available
                $number_of_pages = ceil($number_of_results/$results_per_page);

                //determine which page no visitor is currently
                if(!isset($_GET['page'])){
                    $page = 1;
                }
                else {
                    $page = $_GET['page'];
                }


                //determine the sql LIMIT starting no of each page
                $this_page_first_result = ($page-1)*$results_per_page;

                //retrive selected results from db and display
                $sql = "SELECT * FROM newsletters LIMIT " .$this_page_first_result .',' . $results_per_page ;
                $result = mysqli_query($conn, $sql);

                while($row = mysqli_fetch_array($result)){
                ?>
                    <div class="heading">
                        <h2 class="text-uppercase">
                            <?php echo $row['title']; ?>
                        </h2>
                        <h5>At :
                            <?php echo $row['location']." ". $row['date']; ?>
                        </h5>
                        <div class="img1">
                            <img src='<?php echo $row[' img1 ']; ?>' width="300px" />
                            <img src='<?php echo $row[' img2 ']; ?>' width="300px" /></br>
                        </div><br/>
                        <h4>About Trip..</h4>
                        <p style="text-align:justify">
                            <?php echo $row['about']; ?>
                        </p>
                        <a class="btnAlbum" href="sample.php">Show Album</a>
                    </div>
                    <img src="img/divider.png" />
                    <?php
                }

            //display the links to the page
                ?>
                        <ul class="pagination">
                            <?php
        
            for($page=1; $page<=$number_of_pages; $page++){
                ?>
                                <li id="<?php print($page);?>">
                                    <a href="index.php?page=<?php print($page);?>">
                                        <?php print($page); ?> </a>
                                </li>
                                <?php
            }
            ?>
                        </ul>
            </div>
        </div>
        <!-- Container division close -->

    </div>

    <!-- Trigger/Open The Popup Modal -->
    <button class="postBtn" id="myBtn">Post</button>

    <div class="loadimg" id='loadingmessage'>
        <img class="limg" src='img/inf.gif' />
    </div>


    <div class="jumbotron text-center footer" style="margin-bottom:0">
        <h2>MyTravelHolicAdventure.in</h2>
        <small>Copyright &copy;2018</small><br/>
        <small>Developed and maintained by Kaleedas Sake</small><br/><br/>
        <a href="http://www.facebook.com/kalidas.sake" target="_blank"><i class="fab fa-2x fa-facebook-f" > &ensp; </i></a>
        <a href="http://www.facebook.com/kalidas.sake" target="_blank"><i class="fab fa-2x fa-twitter" > &ensp; </i></a>
        <a href="http://www.facebook.com/kalidas.sake" target="_blank"><i class="fab fa-2x fa-instagram" > &ensp; </i></a>
        <a href="http://www.facebook.com/kalidas.sake" target="_blank"><i class="fab fa-2x fa-linkedin-in" > &ensp; </i></a>
        <a href="http:https://www.github.com/Kalidas-sake" target="_blank"><i class="fab fa-2x fa-github" > &ensp; </i></a>
    </div>

    <script>
        //for showing pagination
        var c = <?php print($rec_count); ?> / 3;
        var ul = document.getElementById("paging");
        for (i = 0; i < c; i++) {
            (function() {
                $("#paging").html("<li><a href = '?page=" + i + "'>" + i + "</a></li>");
            })();

        }

        //for making current pagination active
        var pageNo = <?php print($_GET['page']); ?>;

        //for showing nothing to show msg when database is empty
        var records = <?php print($number_of_results); ?>;
        //document.getElementById("noData").style.display = "block";
        //errblock.style.display = 'block';
        if (!records > 0) {
            
        }

    </script>

    <script>
        window.onscroll = function() {
            myFunction()
        };

        var header = document.getElementById("mynavbar");
        var sticky = header.offsetTop;
        var space = document.getElementById("main-container");

        function myFunction() {
            if (window.pageYOffset > sticky) {
                header.classList.add("black");
                space.style.marginTop = '80px';
                //document.getElementById("main-container").style.margin-top = "60px";
            } else {
                header.classList.remove("black");
                space.style.marginTop = '0px';
            }
        }

    </script>

    <script>
        // Get the modal
        var modal = document.getElementById('myModal');

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal
        btn.onclick = function() {
            modal.style.display = "block";
            btn.style.display = "none";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
            btn.style.display = "block";
            location.reload(true);
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                btn.style.display = "block";
            }
        }

    </script>

    <script>
        $("#sub").click(function() {
            var data = $("#myForm :input").serializeArray();

            $.post($("#myForm").attr("action"), data, function(info) {
                alert(info);
                clearInput();
                this.reload;
            });
        });

        $("#myForm").submit(function() {
            return false;
        })

        function clearInput() {
            $("#myForm :input").each(function() {
                $(this).val('');
            });
        }


        function loadImageFunction() {
            var loadimg1 = document.getElementById('previmg1').value;
            var loadimg2 = document.getElementById('previmg2').value;
            $("#prev1div").html("<img src='" + loadimg1 + "'  height ='136' width = '236' alt='Uploading....'/>");
            $("#prev2div").html("<img src='" + loadimg2 + "'  height ='136' width = '236' alt='Uploading....'/>");
        }

    </script>

    <script>
        $("#btnEnter").click(function() {
            var mylink = $("#form2 :input").serializeArray();
            $('#loadingmessage').show();
            $.post('parse.php', mylink, function(info) {
                var array = info.split(",");
                document.getElementById("titletext").value = array[3];
                $('#loadingmessage').hide();
            });
        });

        $("#form2").submit(function() {
            return false;
        });

    </script>
</body>

</html>
