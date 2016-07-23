$(function(){
		$('#header').on('mouseover','.li',function(){
			$(this).css('color','#e10482');
			$(this).children().css('color','#e10482');
		}).on('mouseout','.li',function(){
			$(this).css('color','#666666');
			$(this).children().css('color','#666666');
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
		$(document).on('mouseover','.deco',function(){
			$(this).addClass('text');
		}).on('mouseout','.deco',function(){
			$(this).removeClass('text');
		})
		$('#banner #ban4 #ban4-l').on('mouseover','.btn',function(){
			$(this).css('background','#e10482')
		}).on('mouseout','.btn',function(){
			$(this).css('background','#000');
		})
		//banner 海外抢购商品划过放大效果
		$('#banner #ban4 #ban4-l-bottom').on('mouseover','img',function(){
			$(this).stop().animate({width:460,height:286,left:-21,top:-13});
		}).on('mouseout','img',function(){
			$(this).stop().animate({width:418,height:260,left:0,top:0});
		});
		//banner右侧品牌图片鼠标划过
		$('#banner #ban4 #ban4-r #ban4-r-bottom').on('mouseover','div',function(){
			$(this).stop(false,true).css({
				border:'1px solid #ddd',
			}).children('span').css({
				display:'block',
			});
		}).on('mouseout','div',function(){
			$(this).stop(false,true).css({
				border:'1px solid #fff',
			}).children('span').hide();
		});
		$('#banner #ban4 #ban4-r #ban4-r-bottom1').on('mouseover','img',function(){
			$(this).stop().css({border:'1px solid #ddd'});
		}).on('mouseout','img',function(){
			$(this).stop().css({border:'1px solid #fff'});
		});
		//楼层列表鼠标划过
		$('#footer #index').on('mouseover','a',function(){
			$(this).css('color','#e10482');
		}).on('mouseout','a',function(){
			$(this).css('color','#000');
		});
		$('#footer #center').on('mouseover','li',function(){
			$(this).css('background','#e10482');
		}).on('mouseout','li',function(){
			$(this).css('background','#000');
		});
		$('#footer #bottom').on('mouseover','a',function(){
			$(this).css('color','#e10482');
		}).on('mouseout','a',function(){
			$(this).css('color','#9c9c9c');
		});
		$('#floor .kefu').on('mouseover',function(){
			$(this).children('.right').stop().animate({
				opacity:1,
				right:30,
			}).show();
		}).on('mouseout',function(){
			$(this).children('.right').stop().animate({
				opacity:0,
				right:55,
			}).hide();
		})
		$('#floor .gouwu,#floor .top').on('mouseover',function(){
			$(this).css({background:'#e10482'});
		}).on('mouseout',function(){
			$(this).css({background:'#000'});
		});
		//top直接滑到顶部
		$('#floor .top').on('click',function(){
			$(window).scrollTop(0);
		});
		$('#floor .shoucang').on('mouseover',function(){
			$(this).css('background','#e10482').children('.shou').stop().animate({
				opacity:1,
				right:35,
			}).show();
		}).on('mouseout',function(){
			$(this).css('background','#000').children('.shou').stop().animate({
				opacity:0,
				right:55,
			}).hide();
		});
		$('#floor .youhui').on('mouseover',function(){
			$(this).css('background','#e10482').children('.quan').stop().animate({
				opacity:1,
				right:35,
			}).show();
		}).on('mouseout',function(){
			$(this).css('background','#000').children('.quan').stop().animate({
				opacity:0,
				right:55,
			}).hide();
		});
		$('#floor .ma').on('mouseover',function(){
			$(this).css('background','#e10482').children('.zhuce').stop().animate({
				opacity:1,
				right:35,
			}).show();
		}).on('mouseout',function(){
			$(this).css('background','#000').children('.zhuce').stop().animate({
				opacity:0,
				right:55,
			}).hide();
		});
		//主菜单点击切换
		var i;
		$('#nav .fenlei').on('click',function(){
			$(this).hide().next().show();
			$('#list').show();
		});
		$('#nav .shouqi').on('click',function(){
			$(this).hide().prev().show();
			$('#list').hide();
		});
		$('#list .main_list').on('mouseover','li',function(){
			i=$(this).index();
			$(this).css({
				background:'#000',
				color:'#fff'
			}).siblings().css({
				background:'#e4e4e4',
				color:'#000'
			});
			$('#list .list').children('li').eq(i).show();
			$('#list .list').children('li').eq(i).siblings().hide();
		});
	})
