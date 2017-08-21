<?php
	   $username=$_POST['username'];  
       $password=$_POST['password']; 
	   $email=$_POST['email']; 
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
	 where username = '$username'";  
	   $result=mysqli_query($conn,$sql);  
	   $num = mysqli_num_rows($result);
	   if($num){
		   
		  $su="用户名已存在";
	   } else {
		   $sql_insert="insert into user_table (username,password,email) values ('$username','$password','$email')";
		   $ins_sql= mysqli_query($conn,$sql_insert);
		   if($ins_sql){
			    $su="注册成功";
		   } 
		   else 
		   {
			    $su="注册失败";
		   }
		
	   }   
	  $data='{su:"' . $su .'"}';
	  echo json_encode($data);
	
?>
