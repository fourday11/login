<?php 
	   $username=$_POST['username'];  
       $email=$_POST['email']; 
	   
	   //$username='w11122';  
       //$email='13672167939@163.com'; 
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
	 $sql="select username,email,password
	 from user_table 
	 where username = '$username' and email = '$email'";  
	   $result=mysqli_query($conn,$sql);  
	   $result1=mysqli_fetch_array($result);
	   $num = mysqli_num_rows($result);
	   if($num){
		   $pass=$result1[2];
		  $su='success';
	   } else {
		  $pass=''; 
		  $su='fail';
		   }
	$data='{password:"' . $pass .'",su:"' . $su .'"}';   
//	  $data='{su:"' . $su .'"'.'password:"'.$pass.'"}';
	  echo json_encode($data);
	
?>
