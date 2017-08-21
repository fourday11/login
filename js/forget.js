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
		var username= $('.username').val();
		var email = $('.email').val();
		  $.ajax({
			  type:"post",
			  url:"php/forget.php",
			  data:{
				  username: username,
				  email: email
			  },
			  dataType:"json",//回掉函数接收的数据格式
			    success:function(msg){
					var data=eval("("+msg+")");
					if(data.su==="success"){
						
						 $('.login-error').text('密码为'+data.password);
					}
					else{
						$('.login-error').text('密码或者用户名错误！');
					}
				

					
				},
					error: function(XMLHttpRequest, textStatus, errorThrown) {
					 alert("错误状态码:"+XMLHttpRequest.status);
				   alert("错误状态码:"+XMLHttpRequest.status);
 				   alert("错误信息："+textStatus);
  						 }
			  
		  });
		
	});
});
		
	

// JavaScript Document