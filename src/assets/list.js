;$(function(){
	$('#shopping').on('mouseover','.kouhong',function(){
			$(this).children('.buy').css('background','#e10482');
			$(this).find('img').stop().animate({width:310,height:310,left:-20,top:-20});
			$(this).css('border','1px solid #9c9595');
			//console.log($(this).children('img').Width())
		}).on('mouseout','.kouhong',function(){
			$(this).children('.buy').css('background','#000');
			$(this).find('img').stop().animate({width:270,height:270,left:0,top:0});
			$(this).css('border','1px solid #f0f0f0')
		});
	
	
	
});
