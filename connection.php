<?php      
    $host = "34.66.111.178";  
    $user = "yash";  
    $password = "Yashodhan@123";  
    $db_name = "logins";  
      
    $conn = new mysqli($host, $user, $password);
    if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";  
?>  
