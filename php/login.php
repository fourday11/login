<?php 
	   $username=$_POST['username'];  
       $password=$_POST['password']; 
	   $dbhost = 'localhost:3306';
	   $dbuser = 'root';
	   $dbpass ='123456';
	   $dbname ='userDb';
	   //创建连接
	   $conn = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);
	   //连接失败
	    
	   if(!$conn)
	   {
		   die('数据库连接失败:'.mysqli_error($conn));
	   }
	   mysqli_select_db($conn,$dbname);
	 $sql="select username,password 
	 from user_table 
	 where username = '$username' and password = '$password'";  
	   $result=mysqli_query($conn,$sql);  
	   $result1=mysqli_fetch_array($result);
	   $num = mysqli_num_rows($result);
	   if($num){
		   
		  $su="success";
	   } else {
		   
		  $su="fail";
		   }
		   
	  $data='{su:"' . $su .'"}';
	  echo json_encode($data);
	
?>
