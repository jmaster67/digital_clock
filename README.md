# digital_clock

//text color change every hour
	setInterval(function(){
		var d = new Date();
		var cc = ["orange", "blue", "green", "yellow", "purple", "red"];
		var i = Math.floor(Math.random()*cc.length);
		console.log(i);
			$("#clock").css("color", cc[i]);
	}, 3600000);
	
