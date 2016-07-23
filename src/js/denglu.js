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
