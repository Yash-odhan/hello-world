<?php      
    $host = "127.0.0.1";  
    $user = "yash";  
    $password = "Yashodhan@123";  
    $db_name = "logins";  
      
    $con = mysqli_connect($host, $user, $password, $db_name);  
    if(mysqli_connect_errno()) {  
        die("Failed to connect with MySQL: ". mysqli_connect_error());  
    }
    echo "Connection Successful";
?>  
