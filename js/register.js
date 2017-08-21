$(document).ready(function(){

	//按下enter键后submit

 function keyLisner(e){
		if(e.which ===13){
			$('.login').click();
			$('.login').css("color","#E03538");
		}
	}
		$(document).keydown(keyLisner);
	
		//注册验证
		
		var checkInput;	
	    $("input").blur(function(){
		var userReg=/^[a-zA-Z\_][0-9a-zA-Z\_\$]{1,10}/;
		var pswReg=/[0-9a-zA-Z]{6,20}/;
		var emailReg=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
		var user=$('.user').val();
		var psw=$('.psw').val();
		var conPsw=$('.confPsw').val();
		var email=$('.email').val();
			if(!userReg.test(user)||(user.length>10)){
				$('.user_error').text("用户名必须为数字、字母、下划线组成的1-10位字符，且首位为字母或下划线");
				checkInput=0;
				
			}else{
				checkInput=1;
				$('.user_error').css("display","none");
			}
			if(!pswReg.test(psw)||(psw.length<6 || psw.length>20)){
			  $('.psw_error').text("密码必须为6-20位数字或大小写字母字符");
			  checkInput=0;
			}else{
				checkInput=1;
			$('.psw_error').css("display","none");
			}
			if(psw.length!==conPsw.length||psw!==conPsw){
				$('.conf_error').html("两次密码不一致");
				checkInput=0;
			}else{
				checkInput=1;
				$('.conf_error').css("display","none");
			}
			if(!emailReg.test(email)){
			  $('.email_error').html("email格式错误");
			  checkInput=0;
			}else{
				checkInput=1;
			$('.email_error').css("display","none");
			}
			
		});
	
		 $('.login').click(function(){  
              var username=$('.user').val();  
              var password=$('.psw').val(); 
			  var email=$(".email").val();
			  if(checkInput===1){
               $.ajax({  
                  type:"post",  
				  url:"php/check.php", //只能是站点下路径
                  data: {username:username,password:password,email:email},//提交到demo.php的数据  
                  dataType: "json",//回调函数接收数据的数据格式  
                   success: function(msg){  
                                              var data='';  
                                              if(msg!=''){  
								
                                                data = eval("("+msg+")");  
                                         
                                                  $('#text').html(data.su); 
												
                                              }  
                                             
                                },  
                            
                   error: function(XMLHttpRequest, textStatus, errorThrown) {
				  // alert(XMLHttpRequest.status);
 				  // alert(XMLHttpRequest.readyState);
 				//	alert(textStatus);
				$('#text').html("服务器出现错误！"); 
  						 }

                      });  
			  } else {
				  $('#text').html("您的信息尚未填写完整");
			  }
		 });
	
	});
		
// JavaScript Document