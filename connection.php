<?php      
    $host = "10.128.0.2";  
    $user = "yash";  
    $password = 'Yashodhan@123';  
    $db_name = "logins";  
      
    $con = mysqli_connect($host, $user, $password, $db_name);  
    if(mysqli_connect_errno()) {  
        die("Failed to connect with MySQL: ". mysqli_connect_error());  
    }  
?>  
