   // JavaScript Document
//隐藏中间字符
function fnHidNum(sString, nStart, nEnd){
	//参数：需要隐藏的字符串, 开头显示个数, 结尾显示个数
	
	var strStart = sString.substr(0, nStart)
	//截取开头需要显示的字符串
	
	var strEnd = sString.substr(-nEnd);
	//截取结尾需要显示的字符串
	
	var sStar = "";
	for(var i=0; i<sString.length-nStart-nEnd; i++){
		sStar += "*";
	}
	//计算字符串中间的“*”
	
	var str = strStart + sStar + strEnd;
	//拼接出隐藏后的字符串
	
	return  str;//返回隐藏后的字符串
}
//加“0”
function add0(nNum){
	//传入需要加“0”的数字
	
	if(nNum<10){
		nNum = "0"+nNum;
	}
	//判断是否小于10，如果小于10，数字前加“0”
	
	return nNum;//返回加“0”后的数字
}
//日期格式化
function fnDate(dDate, sFu){
//参数：日期, 格式化符号
	
	var dYear = dDate.getFullYear();//获取年份
	var dMonth = add0(dDate.getMonth()+1);//获取月份
	var dDay = add0(dDate.getDate());//获取几号
	var sDate = "";
	if(sFu){
		sDate = dYear+sFu+dMonth+sFu+dDay;
	}else{
		sDate = dYear+"年"+dMonth+"月"+dDay+"日";
	}
	
	return sDate;//返回字符串
}
//时间格式化
function fnTime(dDate, sFu){
	var dHour = add0(dDate.getHours());
	var dMinute = add0(dDate.getMinutes());
	var dSecond = add0(dDate.getSeconds());
	var dTime = "";
	if(sFu){
		dTime = dHour+sFu+dMinute+sFu+dSecond;
	}else{
		dTime = dHour+"时"+dMinute+"分"+dSecond+"秒";
	}
	
	return dTime;
}
//星期格式化
function fnWeek(dDate){
	var weeks = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
	var dWeek = dDate.getDay();
	return weeks[dWeek];
}
//带开关的日期拼接
function fnAllDate(dDate, bDate, bTime, bWeek){
	var sDate = "";
	
	if(bDate){
		sDate += fnDate(dDate);
	}
	if(bTime){
		sDate += fnTime(dDate);
	}
	if(bWeek){
		sDate += fnWeek(dDate);
	}
	return sDate;
}
//日期拆分成数组
function fnArrDate(dDate){
	var aDate = [];
	var sDate = fnDate(dDate, "/").split("/");
	var sTime = fnTime(dDate, ":").split(":");
	var dWeek = fnWeek(dDate);
	
	aDate = aDate.concat(sDate, sTime, dWeek);
	return aDate;//[年, 月, 日, 时, 分, 秒, "星期"];
}
//在固定位置出现
function fnPosDis(sId, nHeight){//参数：(元素ID, 居于屏幕顶部的距离)
	var oDiv = document.getElementById(sId);
	var scrollT = document.body.scrollTop || document.documentElement.scrollTop;
	if(scrollT > nHeight){
		oDiv.style.display = "block";
	}else if(scrollT <= nHeight){
		oDiv.style.display = "none";
	}
}
//支持低版本浏览器的固定定位
function fixedPos(sId, nTop){//如果第二个参数为true，则元素居于底部
	var oNav = document.getElementById(sId);
	//获取元素
	
	var scrollT = document.body.scrollTop || document.documentElement.scrollTop;
	//计算网页卷去高度
	
	if(nTop){
		nTop = document.documentElement.clientHeight-oNav.clientHeight;
		//当nTop==true(需要元素居于底部), 计算出元素居于可视区顶部的距离
	}
	oNav.style.top = scrollT+nTop+"px";
	//设置元素的top值为：卷去高度+居于可视区顶部的距离+'px'
}
//返回顶部
function fnBackTop(nX, nY, nSpeed){//参数：x轴每次滚动的距离, y轴每次滚动的距离, 
	var timer = setInterval(function(){
		window.scrollBy(nX, nY);
		var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
		if(scrollT <= 0){
			clearInterval(timer);
		}
	}, nSpeed);
}
//获取非行间样式
function getStyle(oObj, sAttr){
//参数：需要获取样式的元素对象, 需要获取的样式属性名、

	if(oObj.currentStyle){
	//如果该对象存在currentStyle属性，则使用它
	
		sAttr = oObj.currentStyle[sAttr];
		//对象.currentStyle[属性名]
		
	}else{ 
	//其他情况使用高版本浏览器所具有的getComputedStyle()方法
	
		sAttr = getComputedStyle(oObj, false)[sAttr];
		//getComputedStyle(对象, false)[属性名]
	}
	
	return sAttr;  //返回最终得到的样式
}

//通过类名获取元素
function getByClass(oArea, sClass){
//参数：获取范围, 类名

	var aTag = oArea.getElementsByTagName('*');
	//使用通配符“*”获取范围内所有标签
	
	var aResult = [];
	//创建空数组，用于存放符合条件的元素
	
	for(var i=0; i<aTag.length; i++){//循环所有标签
	
		if(aTag[i].className == sClass){//如果标签类名符合要求
		
			aResult.push(aTag[i]);//将元素放进空数组中
			
		}
	}
	
	return aResult;//返回最终元素数组
	
}
function fnSetCookie(cookname,cookvalue,outname){
var dDate=new Date();
dDate.setDate(dDate.getDate()+outname);	
document.cookie=cookname+"="+cookvalue+";expires"+dDate;	
}
function fnCheckCookie(cookname){
	var result="";
	var aCookie=document.cookie.split("; ");
for(var i=0;i<aCookie.length;i++){
	var aCook=aCookie[i].split("=");
	if(aCook[0]==cookname){
		result=aCook[1];
	}
	
}
	return result;
}
function fnRemoveCookie(cookname){
		fnSetCookie(cookname,"",-1);
}