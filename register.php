<?php      
    include('connection.php');  
    $username = $_POST['user'];  
    $password = $_POST['pass'];

        //to prevent from mysqli injection  
        $username = stripcslashes($username);  
        $password = stripcslashes($password);  
        $username = mysqli_real_escape_string($con, $username);  
        $password = mysqli_real_escape_string($con, $password);  
      
        $sql = "insert into login values('$username', '$password')";  
        $result = mysqli_query($con, $sql);  
if ($result === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}          


?>  
