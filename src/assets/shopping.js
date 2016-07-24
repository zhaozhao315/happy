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
	
	
	//商品列表点击改变类,并且改变当前显示页面
	$('#content .con_right .top').on('click','li',function(){
		index=$(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$('#content .con_right').children('div').eq(index).show().siblings('div').hide();

	});
	//加入购物车，点击，购物车商品数量增加
	var i=parseInt($('#floor .gouwu .num').html());
	$('#shopping .right .dai').on('click',function(){
		$(this).next().show().animate({top:$('#floor .gouwu').offset().height,right:-250},1000);
		
		$('#floor .gouwu .num').html(i);
		i++;
		console.log(i)
	});
	//$('#shopping .right .none').hide();
	var $input=$('#shopping .right dl dd input');
	var i=$input.val();
	
	$('#shopping .right dl a').on('click',function(){
		if($(this).hasClass('jia')){
			i++;
			$input.val(i);
		}else if($(this).hasClass('jian')){
			i--;
			if(i<=1){
				i=0;
			}
			$input.val(i);
		}
	});
	
});
