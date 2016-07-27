;$(function(){
	$('#denglu ul').on('click','li',function(){
		$(this).addClass('current').siblings().removeClass('current');
		if($(this).hasClass('zhanghao')){
			$('#denglu #login_one').show();
			$('#denglu #login_two').hide();
		}else if($(this).hasClass('yanzhengma')){
			$('#denglu #login_two').show();
			$('#denglu #login_one').hide();
		}
	});
	$('#welcome').on('mouseover','a',function(){
		$(this).css({
			background:'#e10482',
			color:'#fff'
		});
	}).on('mouseout','a',function(){
		$(this).css({
			background:'#fff',
			color:'#e10482'
		});
	});
	//登录验证
	//输入手机号 1 38 8888 8888,密码长度小于20,不能包含空格
	var $username=/^1[34578]\d{9}$/;
	var $word=/^\S{1,20}$/;
	var $duanxin=/^[0-9]{6}$/;
	var $name1=$('#denglu #login_one .name input');
	var $word1=$('#denglu #login_one .word input');
	var $name2=$('#denglu #login_two .name input');
	var $word2=$('#denglu #login_two .word input');
	var _duanxin=$('#denglu #login_two .duanxin input');
	var aImg=['ebqk','c87g','cp67','emw3','ec84','cxg4'];
			var uimg=aImg[parseInt(Math.random()*6)];
			var $Img=$('#zhuce #login_two').find('img');
			$Img.attr('src','../img/'+uimg+'.png');
			$("#zhuce #login_two img").click(function(){
				var uimg=aImg[parseInt(Math.random()*6)];
				$Img.attr('src','../img/'+uimg+'.png');
			});
	$('#denglu #login_one .btn').on('click',function(){
		if(!$username.test($name1.val())){
			$('#denglu #login_one .name').css({
				border:'2px solid #e10482',
			}).children('.warn').show();
		}else{
			$('#denglu #login_one .name').css('border','none').children('.warn').hide();
		}
		if(!$word.test($word1.val())){
			$('#denglu #login_one .word').css({
				border:'2px solid #e10482',
			}).children('.warn').show();
		}else{
			$('#denglu #login_one .word').css('border','none').children('.warn').hide();
		}
		//如果全部符合条件，发送登录信息到后台
		if($username.test($name1.val())&&$word.test($word1.val())){
			$.ajax({
				type:"get",
				url:"http://10.16.155.14:3000/ajax/register?type=query",
				async:true,
				dataType:'json',
				success:function(res){
					console.log(res);
					$.each(res.data, function(idx,item) {    
						console.log(item);
							if($name1.val()==item.username && $word1.val()==item.userpwd){
								console.log("登录成功")
								$('#header #login').html('欢迎您');
								$('<a/>').html('[退出]').insertAfter($('#header #login'));
								var userinfo = {username:$name.val(),userpwd:$word1.val()};
		 						document.cookie = 'userInfo=' + JSON.stringify(userinfo);
								//fnSetCookie($name.val(),$word1.val(),7);
							}else{
								$('#denglu #login_one .word').children('.warn').html('用户名与密码不匹配').show();
								$name1.val()="";
								$word1.val()="";
								}
						});
				}
			});
		}
		});
	//获焦、失焦状态输入框的变化
	$name1.on('blur',function(){
			if(!$username.test($name1.val())){
			$('#denglu #login_one .name').css({
				border:'2px solid #e10482',
			}).children('.warn').show();
		}else{
			$('#denglu #login_one .name').css('border','none').children('.warn').hide();
		}
	}).on('focus',function(){
		$('#denglu #login_one .name').css('border','2px solid #bbb').children('.warn').hide();

	});
	
	$word1.on('blur',function(){
		if(!$word.test($word1.val())){
			$('#denglu #login_one .word').css({
				border:'2px solid #e10482',
			}).children('.warn').show();
		}else{
			$('#denglu #login_one .word').css('border','none').children('.warn').hide();
		}
	}).on('focus',function(){
		$('#denglu #login_one .word').css('border','2px solid #bbb').children('.warn').hide();
		
	})
	//验证码登录
	//手机验证码随机六位数
	$('#denglu #login_two .btn').on('click',function(){
		if(!$username.test($name2.val())){
			$('#denglu #login_two .name').css({
				border:'2px solid #e10482',
			}).children('.warn').show();
		}else{
			$('#denglu #login_two .name').css('border','none').children('.warn').hide();
		}
		if(!$word.test($word2.val())){
			$('#denglu #login_two .word').css({
				border:'2px solid #e10482',
			}).children('.warn').show();
		}else{
			$('#denglu #login_two .word').css('border','none').children('.warn').hide();
		}
		if(!$duanxin.test(_duanxin.val())){
			$('#denglu #login_two .duanxin').css({
				border:'2px solid #e10482',
			}).children('.warn').show();
			$('#denglu #login_two .duanxin').children('div').css('border','none');
		}else{
			$('#denglu #login_two .duanxin').css('border','none').children('.warn').hide();
		}
		});
		//获焦失焦状态
		$name2.on('blur',function(){
			if(!$username.test($name2.val())){
			$('#denglu #login_two .name').css({
				border:'2px solid #e10482',
			}).children('.warn').show();
		}else{
			$('#denglu #login_two .name').css('border','none').children('.warn').hide();
		}
	}).on('focus',function(){
		$('#denglu #login_two .name').css('border','2px solid #bbb').children('.warn').hide();

	});
	
	$word2.on('blur',function(){
		if(!$word.test($word2.val())){
			$('#denglu #login_two .word').css({
				border:'2px solid #e10482',
			}).children('.warn').show();
		}else{
			$('#denglu #login_two .word').css('border','none').children('.warn').hide();
		}
	}).on('focus',function(){
		$('#denglu #login_two .word').css('border','2px solid #bbb').children('.warn').hide();
		
	});
	_duanxin.on('blur',function(){
		if(!$duanxin.test(_duanxin.val())){
			$('#denglu #login_two .duanxin').css({
				border:'2px solid #e10482',
			}).children('.warn').show();
		}else{
			$('#denglu #login_two .duanxin').css('border','none').children('.warn').hide();
			$('#denglu #login_two .duanxin').children('div').css('border','1px solid #ccc');
		}
	}).on('focus',function(){
		$('#denglu #login_two .duanxin').css('border','2px solid #bbb').children('.warn').hide();
		$('#denglu #login_two .duanxin').children('div').css('border','none');

	})
});
