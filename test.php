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
        </h5><br/>
        <p>...................................</p>
    </div>
<?php
}

//display the links to the page
for($page=1; $page<=$number_of_pages; $page++){
    echo '<a href="test.php?page=' . $page .'">' . $page . '</a>';
}
?>
