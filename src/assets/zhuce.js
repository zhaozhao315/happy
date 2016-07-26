;$(function(){
	//手机验证码随机六位数
	var $username=/^1[34578]\d{9}$/;
	var $duanxin=/^[0-9]{6}$/;
	var $name2=$('#zhuce #login_two .name input');
	var $word2=$('#zhuce #login_two .word input');
	var _duanxin=$('#zhuce #login_two .duanxin input');
	var $name=/^[0-9a-zA-Z]{6,20}$/;
	var $word=/^[0-9a-z]{6,10}$/;
	var $name1=$('#zhuce #login_one_zhu .name input');
	var $mima=$('#zhuce #login_one_zhu .word .one');
	var $mima1=$('#zhuce #login_one_zhu .word .two');
	//验证码
	var aImg=['ebqk','c87g','cp67','emw3','ec84','cxg4'];
			var uimg=aImg[parseInt(Math.random()*6)];
			var $Img=$('#zhuce #login_two').find('img');
			$Img.attr('src','../img/'+uimg+'.png');
			$("#zhuce #login_two img").click(function(){
				var uimg=aImg[parseInt(Math.random()*6)];
				$Img.attr('src','../img/'+uimg+'.png');
			});
		//获焦失焦状态
		$name2.on('blur',function(){
			if(!$username.test($name2.val())){
			$('#zhuce #login_two .name').css({
				border:'2px solid #e10482',
			}).children('.warn').show();
		}else{
			$('#zhuce #login_two .name').css('border','none').children('.warn').hide();
		}
	}).on('focus',function(){
		$('#zhuce #login_two .name').css('border','2px solid #bbb').children('.warn').hide();

	});
	
	$word2.on('blur',function(){
		console.log($("#zhuce #login_two img").attr('src').substr(7,4))
		if($word2.val()!=$("#zhuce #login_two img").attr('src').substr(7,4)){
			
			$('#zhuce #login_two .word').css({
				border:'2px solid #e10482',
			}).children('.warn').show();
		}else{
			$('#zhuce #login_two .word').css('border','none').children('.warn').hide();
		}
	}).on('focus',function(){
		$('#zhuce #login_two .word').css('border','2px solid #bbb').children('.warn').hide();
		
	});
	_duanxin.on('blur',function(){
		if(!$duanxin.test(_duanxin.val())){
			$('#zhuce #login_two .duanxin').css({
				border:'2px solid #e10482',
			}).children('.warn').show();
		}else{
			$('#zhuce #login_two .duanxin').css('border','none').children('.warn').hide();
			$('#zhuce #login_two .duanxin').children('div').css('border','1px solid #ccc');
		}
	}).on('focus',function(){
		$('#zhuce #login_two .duanxin').css('border','2px solid #bbb').children('.warn').hide();
		$('#zhuce #login_two .duanxin').children('div').css('border','none');

	});
	
	//全部符合条件，点击下一步按钮
	$('#zhuce').on('click',function(){
		if($username.test($name2.val())==true&&$word2.val()==$("#zhuce #login_two img").attr('src').substr(7,4)&&$duanxin.test(_duanxin.val())==true){
		$('#zhuce #login_two .btn button').css({
			background:'#e10482',
			cursor:'pointer'
		});
	}
	});
	$('#zhuce #login_two .btn button').on('click',function(){
		$('#zhuce #login_two').hide();
		$('#zhuce #login_one_zhu').show();
	});
	$name1.on('blur',function(){
		if(!$name.test($name1.val())){
			$('#zhuce #login_one_zhu .name').css({
				border:'2px solid #e10482',
			}).children('.warn').show();
		}else{
			$('#zhuce #login_one_zhu .name').css('border','none').children('.warn').hide();
		}
	}).on('focus',function(){
		$('#zhuce #login_one_zhu .name').css('border','2px solid #bbb').children('.warn').hide();		
	});
	$mima.on('blur',function(){
		if(!$word.test($mima.val())){
			$('#zhuce #login_one_zhu .one_').next('.warn').show();
		}else{
			$('#zhuce #login_one_zhu .one_').next('.warn').hide();			
		}
	}).on('focus',function(){
		$('#zhuce #login_one_zhu .one_').next('.warn').hide();
	});
	$mima1.on('blur',function(){
		if($mima1.val()!=$mima.val()){
			$('#zhuce #login_one_zhu .two_').next('.warn').show();
		}else{
			$('#zhuce #login_one_zhu .two_').next('.warn').hide();			
		}
	}).on('focus',function(){
		$('#zhuce #login_one_zhu .two_').next('.warn').hide();
	});
	var login;
	$('#zhuce #login_one_zhu .btn button').on('click',function(){
		if(!$name.test($name1.val())){
			$('#zhuce #login_one_zhu .name').css({
				border:'2px solid #e10482',
			}).children('.warn').show();
		}else{
			$('#zhuce #login_one_zhu .name').css('border','none').children('.warn').hide();
		}
		if(!$word.test($mima.val())){
			$('#zhuce #login_one_zhu .one_').next('.warn').show();
		}else{
			$('#zhuce #login_one_zhu .one_').next('.warn').hide();			
		}
		if($mima1.val()!=$mima.val()){
			$('#zhuce #login_one_zhu .two_').next('.warn').show();
		}else{
			$('#zhuce #login_one_zhu .two_').next('.warn').hide();			
		}
		if($('#zhuce #login_one_zhu .check :checkbox').prop('checked')){
			$('#zhuce #login_one_zhu .check').children('.warn').hide();
		}else{
			$('#zhuce #login_one_zhu .check').children('.warn').show();
		}
		var $name_=$name2.val();
		var $mima_=$mima.val();
		fnSetCookie($name2.val(),$mima.val(),7)
		fnSetCookie('login',"true",7)
					$.ajax({
					type:"get",
					url:"http://10.16.155.23:3000/js/register?type=send",
					async:true,
					data:{regname:$name_,passpwd:$mima_,login:true},
					success:function(res){
						alert('恭喜你，注册成功！');
						window.location.href="../index.html";
					}
				});
	});
			

});
