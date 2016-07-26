$(function(){
		var d = new Date();
		//d.setDates(1);
		d.setHours(23);
		d.setMinutes(30);
		d.setSeconds(30);
		var $time=$('#banner #ban4 #ban4-l-bottom .bottom .right .top .time');
		function test(){
			var now = new Date();
			var seconds = parseInt((d.getTime()-now.getTime())/1000);
			if(seconds<0){
				//console.log(444);
				clearInterval(retime);
				$time.text('00:00:00');
			}else{
				
				var hours = parseInt(seconds/3600);
				if(hours<10){
					hours='0'+hours;
				}
				var minutes = parseInt(seconds%3600/60);
				if(minutes<10){
					minutes='0'+minutes;
				}
				seconds = seconds%60;
				if(seconds<10){
					seconds='0'+seconds;
				}
				var str = hours+":"+minutes+":"+seconds;
				$time.text(str);	
			}
			
		}
		var retime=setInterval(test,1000);
	});		
