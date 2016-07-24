;$(function(){
	//按钮滑过变色
	$('#mod_main .wt2 .con').on('mouseover',function(){
		$(this).css('color','#e10482');
	}).on('mouseout',function(){
		$(this).css('color','#000');
	});
	$('#mod_main .wt3').on('mouseover','button',function(){
		$(this).css({
			background:'#e10482',
			color:'#fff'
		});
	}).on('mouseout','button',function(){
			$(this).css({
				background:'#fff',
				color:'#e10482'
		});
	});
	//点击删除，移除商品
	$('#mod_main .wt1 .list .del').on('click',function(){
		$('#mod_main .wt1').remove();
		$('#mod_main .wt2').remove();
		var $div=$('<div/>');
		$div.css({
			width:990,
			height:336,
			fontSize:16,
			color:'#e10482',
			paddingTop:200,
			textAlign:'center'
		}).html('购物车是空空的,去逛逛吧');
		
		$div.insertBefore('#mod_main .wt3');
	});
	//点击数量价钱变化
	/*var $input=$('#mod_main .wt1 .list .num');
	var i=$input.val();
	var $total=$('#mod_main .wt1 .list .total');
	var $price=$('#mod_main .wt1 .list .price')
	$('#mod_main .wt1 .list').on('click','a',function(){
		console.log(i);
		if($(this).hasClass('jian')){
			i--;
			if(i<=1){
				i=1;
			}
			
			$input.val(i);
			
		}else if($(this).hasClass('jia')){
			i++;
			$input.val(i);
			
		}
		parseInt($total.html())=parseInt($price.text()*i);
	})*/
});
