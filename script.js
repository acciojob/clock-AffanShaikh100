//your JS code here. If required.
function clock(){

	let today = new Date();
	
	let minutes = today.getMinutes();
	if(minutes<10)
	{
		minutes = "0"+minutes;
	}

	let seconds = today.getSeconds();
	if(seconds<10){
		seconds = "0"+seconds;
	}

	let time = document.getElementById("timer");
	time.innerHTML = date();
}