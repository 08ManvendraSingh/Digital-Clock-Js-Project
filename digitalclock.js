setInterval(clock,1000);
function clock(){
	var a=document.getElementById('hrs');
	var b=document.getElementById('min');
	var c=document.getElementById('sec');
	var d=document.getElementById('ampm');

	var time=new Date();
	var hrs=time.getHours();
	var min=time.getMinutes();
	var sec=time.getSeconds();
	var ampm;

	if(hrs<=12){
		ampm='AM';
	}
	else{
		ampm='PM';
	}
	if(hrs>12){
		hrs=hrs-12;
	}
	if(hrs<10){
		hrs='0'+hrs;
	}
	if(min<10){
		min='0'+min;
	}
	if(sec<10){
		sec='0'+sec;
	}
	if(hrs==0){
		hrs=12;
	}
	a.innerHTML=hrs;
	b.innerHTML=min;
	c.innerHTML=sec;
	d.innerHTML=ampm;
}