<?php      
    $host = "localhost";  
    $user = "root";  
    $password = '';  
    $db_name = "logins";  
    $mysqli = new mysqli("localhost","root","","mysql");

    // Check connection
    if ($mysqli -> connect_errno) {
      echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
      exit();
    } 
//     $con = mysqli_connect($host, $user, $password, $db_name);  
//     if(mysqli_connect_errno()) {  
//         die("Failed to connect with MySQL: ". mysqli_connect_error());  
//     }  
?>  
