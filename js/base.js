//表单输入验证
"use strict";
$(document).ready(function(){
  function keyLisner(e){
		if(e.which ===13){
			$('#submit').click();
		}
  }
  $(document).keydown(keyLisner);

	//登陆验证
	$("#submit").click(function(){
			if(!$('#user').val()){
			$('.login-error').text('用户名不能为空');
		} else if (!$('#password').val()){
			$('.login-error').text('密码不能为空');
			
		  }
		  //查询是否出现用户名和密码错误的情况
		  $.ajax({
			  type:"post",
			  url:"php/login.php",
			  data:{
				  username: $('#user').val(),
				  password: $('#password').val()
			  },
			  dataType:"json",//回掉函数接收的数据格式
			    success:function(msg){
					var data=eval("("+msg+")");
					if(data.su==="success"){
					     window.location="../login/success.html";
						 $('.login-error').text('chenggong！');
					}
					else{
						$('.login-error').text('密码或者用户名错误！');
					}
				

					
				},
					error: function(XMLHttpRequest, textStatus, errorThrown) {
					 console.log("错误状态码:"+XMLHttpRequest.status);
				   console.log("错误状态码:"+XMLHttpRequest.status);
 				   console.log("错误信息："+textStatus);
  						 }
			  
		  });
		
	});
});
		
	

