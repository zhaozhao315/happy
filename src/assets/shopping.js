;$(function(){
	//大图显示
	var index;
	var isClick=false;
	$('#shopping .img_list').on('mouseover','li',function(){
		index=$(this).index();
		$('#shopping .img').find('img').eq(index).show().siblings('img').hide();
		$(this).addClass('bar').css('border','1px solid #000').siblings('li').removeClass('bar').css('border','1px solid #efefef');
		//console.log(index)
	});
	//放大镜效果
	//鼠标划过图片，放大镜出现
	var $img_=$('#shopping .img');
	var $show=$('#show');
	$('#shopping .img').on('mouseover',function(){
		$('#show').show();
		//index=$(this).index('#shopping .img img');
		$('#shopping .big').show();
		index=$('#shopping .img_list ul .bar').prevAll().length;
		$('#shopping .big').find('img').eq(index).show().siblings().hide();
	}).on('mousemove',function(e){
		var event=e||event;
		var x=e.offsetX;
		var y=e.offsetY;
		if(x<0){
			x=0;
		}else if(x>$img_.outerWidth()-$show.outerWidth()){
			x=$img_.outerWidth()-$show.outerWidth();
		}
		if(y<0){
			y=0;
		}else if(y>$img_.outerHeight()-$show.outerHeight()){
			y=$img_.outerHeight()-$show.outerHeight();
		}
		$show.css({
			left:x,
			top:y
		});
		//比例
		var percentX=x/($img_.outerWidth()-$show.outerWidth());
		var percentY=y/($img_.outerHeight()-$show.outerHeight());
		var $big=$('#shopping .big');
		var oimg=$('#shopping .big img');
		oimg.css({
			left:-percentX*(oimg.outerWidth()-$big.outerWidth()),
			top:-percentX*(oimg.outerHeight()-$big.outerHeight())
		});
		
	}).on('mouseout',function(){
		$('#show').hide();
		$('#shopping .big').hide();
	});
	
	
	//鼠标移动，放大镜跟随
	
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
