<?php      
    $host = "localhost";  
    $user = "root";  
    $password = "";  
    $db_name = "logins";  
      
    $conn = new mysqli($host, $user, $password);
    if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";  
?>  
