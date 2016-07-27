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
		//$('#mod_main .wt2').remove();
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
	/*$('#mod_main .wt1 .list').on('click','.del',function(){
				var $tr = $(this).closest('tr');
				var goodsname = $tr.attr('data-goodsname');

				// 把过期时间设置成昨天
				var now = new Date();
				now.setDate(now.getDate()-1);

				// 删除cookie
				document.cookie = goodsname + '=null;expires=' + now;

				// 移除html
				$tr.remove();
				$('#mod_main .wt1').remove();
				// location.reload();
				list();
			});*/
	//点击数量价钱变化
	var $input=$('#mod_main .wt1 .list .num1');
	
	var $total=$('#mod_main .wt1 .list .total2');
	var $price=$('#mod_main .wt1 .list .price')
	var $strong=$('#mod_main .wt1 .list .two .right strong');
	var $checkbox=$('#mod_main .wt1').find(':checkbox');
	$input.val(fnCheckCookie('$input'));
	var i=$input.val();
	$total.html(fnCheckCookie('$total'));
	$strong.html(fnCheckCookie('$strong'));
	$('#mod_main .wt1 .list').on('click','a',function(){
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
		$total.html(parseInt($price.html())*i);
		$strong.html($total.html());
		fnSetCookie('$input',i,7);
		fnSetCookie('$total',$total.html(),7);
		fnSetCookie('$strong',$strong.html(),7);
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
	/*function list(){
		//console.log("1")
		var _cookie=document.cookie.split(';');
		
		var $table=$('<table/>');
		if(_cookie!=" "){
			console.log("1")
			$.each(_cookie,function(idx,val){
				
				var info =JSON.parse(val.split('='));
				console.log(_cookie)
				var $tr=$('<tr/>').addClass('one').attr('data-goodname',val.split('=')[0]);
				var $check=$('<td/>').html('<input type="checkbox"/>').css('width','5%');
				var $img=$('<img/>').attr('src','info.imgurl');
				var $title=$('<p/>').text(info.name);
				var $content=$('<td/>');
				$content.css('width','43%').append([$img,$title]);
				var $price1=$('<td/>').addClass('price').css('width','16%').html(info.price);
				var $jian=$('<a/>').addClass('jian');
				var $num1=$('<input type="text"/>').addClass('num1');
				var $jia=$('<a/>').addClass('jia');
				var $shuliang=$('<td/>').append([$jian,$num1,$jia]).css('width','12%');
				var $total1=$('<td/>').addClass('total2').css('width','12%');
				var $a=$('<a/>').text('删除');
				var $del=$('<td/>');
				$del.append($a).css('width','12%');
				$tr.append([$check,$content,$price1,$shuliang,$total1,$del]).appendTo($table);
			});
		}
		$table.appendTo('#mod_main .list');
	}*/
});
