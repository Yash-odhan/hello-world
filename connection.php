<?php      
    $host = "localhost";  
    $user = "yash";  
    $password = "Yashodhan@123";  
    $db_name = "logins";  
      
    $conn = new mysqli($servername, $username, $password);
    if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";  
?>  
