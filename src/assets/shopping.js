;$(function(){
	//大图显示
	var index=0;
	var isClick=false;
	$('#shopping .img_list').on('mouseover','li',function(){
		index=$(this).index();
		$('#shopping .img').find('img').eq(index).show().siblings().hide();
		$(this).css('border','1px solid #000').siblings('li').css('border','1px solid #efefef');
		//console.log(index)
	});
	//改变背景颜色
	$('#shopping .right .tixing span').on('mouseover',function(){
		$(this).css('background','#e10482');
	}).on('mouseout',function(){
		$(this).css('background','#000');
	});
	//按钮特效改变透明度
	$('#shopping .right .mai').on('mouseover',function(){
		$(this).css('opacity','0.7');
	}).on('mouseout',function(){
		$(this).css('opacity','1');
	});
	//商品列表点击划过改变类
	$('#content .con_right .top').on('click','li',function(){
		$(this).addClass('active');

	});
	var $input=$('#shopping .right dl dd input');
	$('#shopping .right dl .jian').on('click',function(){
		$input.val()++;
	})
	
});
