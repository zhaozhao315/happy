window.onload=function(){
	var oTotal=document.getElementById('total1');
	console.log(oTotal.innerHTML)
	var oPrice=document.getElementById('price');
	var oNum=document.getElementById('num');
	var ojia=document.getElementsByClassName('jia')[0];
	var ojian=document.getElementsByClassName('jian')[0];
	var oStrong=document.getElementsByTagName('strong')[0];
	oNum.value=fnCheckCookie("oNum");
	oTotal.innerHTML=fnCheckCookie("oTotal");
	oStrong.innerHTML=fnCheckCookie("oStrong");
	//减少
	var num=1;
	oNum.value=num;
	oTotal.innerHTML=oPrice.innerHTML*num;
	ojian.onclick=function(){
		num--;
		if(num<=1){
			num=1;
		}
		oNum.value=num;
		console.log(oNum.value)
		oTotal.innerHTML=oPrice.innerHTML*num;
		console.log(oPrice.innerHTML)
		console.log(num)
		fnSetCookie("oNum",num,7);
		fnSetCookie("oTotal",oTotal.innerHTML,7);
		fnSetCookie("oStrong",oStrong.innerHTML,7);
	}
	//增加
	ojia.onclick=function(){
		num++;
		oNum.value=num;
		oTotal.innerHTML=oPrice.innerHTML*num;
		fnSetCookie("oNum",num,7);
		fnSetCookie("oTotal",oTotal.innerHTML,7);
		fnSetCookie("oStrong",oStrong.innerHTML,7);
	}
	
}
