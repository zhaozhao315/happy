$(function(){
		$('#header').on('mouseover','.li',function(){
			$(this).css('color','#e10482');
		}).on('mouseout','.li',function(){
			$(this).css('color','#666666');
		});
		$('#search').on('mouseover','.over',function(){
			$(this).css('color','#e10482');
		}).on('mouseout','.over',function(){
			$(this).css('color','#979797');
		})
		//搜索栏下面菜单变色
		$('#nav').on('mouseover','.over',function(){
			$(this).css('background','#e10482');
		}).on('mouseout','.over',function(){
			$(this).css('background','#000');
		})
		//主图轮播
		var index=0;
		var timer;
		$('#main').on('mouseover',function(){
			clearInterval(timer);
			$('#main .prev').show();
			$('#main .next').show();
		}).on('mouseout',function(){
			timer=setInterval(start,2000);
			$('#main .prev').hide();
			$('#main .next').hide();
		}).trigger('mouseout');
		$('#main').on('click','.prev',function(){
			index--;
			move();
		}).on('click','.next',function(){
			index++;
			move();
		})
		$('#main .list-btn').on('click','li',function(){
			index=$(this).index();
			move();
		})
		function start(){
			index++;
			move();
		}
		function move(){
			if(index>3){
				index=0;
			}else if(index<0){
				index=3;
			}
			$('#main .list').find('li').eq(index).animate({opacity:1}).siblings().animate({opacity:0});
			$('#main .list-btn').find('li').eq(index).css('backgroundColor','#fff').siblings().css('background','none');
		}
		//logo部分
		$('#logo ul').on('mouseover','li',function(){
			$(this).children().css('color','#e10482');
		}).on('mouseout','li',function(){
			$(this).children().css('color','#404040');
		})
		//banner的ban1部分
		//var $top=$('#banner .top').css('top');
		$('#banner').on('mouseover','.top',function(){
			$(this).stop().animate({top:20});
		}).on('mouseout','.top',function(){
			$(this).stop().animate({top:30});
		})
		$('#banner').on('mouseover','.top_',function(){
			$(this).stop().animate({top:-10});
		}).on('mouseout','.top_',function(){
			$(this).stop().animate({top:0});
		})
		$('#banner').on('mouseover','._top',function(){
			$(this).stop().animate({top:250});
		}).on('mouseout','._top',function(){
			$(this).stop().animate({top:260});
		})
		//ban3部分鼠标划过改变透明度
		$('#banner #ban3').on('mouseover','img',function(){
			$(this).css('opacity',0.7);
		}).on('mouseout','img',function(){
			$(this).css('opacity',1);
		})
		//banner列表商品部分
		$('#banner #ban4 #ban4-l').on('mouseover','.deco',function(){
			$(this).addClass('text');
		}).on('mouseout','.deco',function(){
			$(this).removeClass('text');
		})
		$('#banner #ban4 #ban4-l').on('mouseover','.btn',function(){
			$(this).css('background','#e10482')
		}).on('mouseout','.btn',function(){
			$(this).css('background','#000');
		})
		
	})
