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
	var $input=$('#mod_main .wt1 .list #num');
	var i=$input.val();
	var $total=$('#mod_main .wt1 .list #total1');
	var $price=$('#mod_main .wt1 .list #price')
	var $strong=$('#mod_main .wt1 .list .two .right strong');
	var $checkbox=$('#mod_main .wt1').find(':checkbox');
	$('#mod_main .wt1 .list').on('click','a',function(){
		if($(this).hasClass('jian')){
			i--;
			if(i<=1){
				i=1;
			}
			
			$input.val(i);
			console.log($input.val())
		}else if($(this).hasClass('jia')){
			i++;
			$input.val(i);
			
		}
		$total.html(parseInt($price.html())*i);
		$strong.html($total.html());
	});
	var j=$('#mod_main .wt2 .num').html();
	$('#mod_main .wt1 .list .one').on('click','.td input',function(){
		check();
		checkAll();
		
	});
	//全选状态
	$('#checkall').click(function(){
		//先获取#checkall的选择状态
		var checked=$(this).prop('checked');
		$checkbox.prop('checked',checked);
		check();
	});
	function check(){
		if($('#mod_main .wt1 .list .one .td :checkbox').prop('checked')){
			j++;
			$('#mod_main .wt2 .num').html(j);
			$('#mod_main .wt2 .pri').html($strong.html());
		}else{
			j--;
			$('#mod_main .wt2 .num').html(j);
			$('#mod_main .wt2 .pri').html(0);
		}
	}
	// 全选状态改变
	// 如何判断全部选中
	// 复选框的数量是否等于选中复选框的数量
	function checkAll(){
		var $checked = $checkbox.filter(':checked');
		$('#checkall').prop('checked',$checkbox.length == $checked.length);
	}
	
});
