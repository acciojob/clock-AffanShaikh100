//your JS code here. If required.
function clock(){

	let today = new Date();
	let month = today.getMonth()+1;
	let day = today.getDate();
	let year = today.getFullYear();
	let hours = today.getHours();
	
	let minutes = today.getMinutes();
	if(minutes<10)
	{
		minutes = "0"+minutes;
	}

	let seconds = today.getSeconds();
	if(seconds<10){
		seconds = "0"+seconds;
	}
	let unit;
	if(hours>12){
		unit = "PM";
	}
	else{
		unit = "AM";
	}

	let time = document.getElementById("timer");
	time.innerHTML = month+"/"+ day +"/"+ year +"," + " " + hours 
		+":"+ minutes + ":" + seconds + " "+unit;
	
	setTimeout("clock()", 1000);
}