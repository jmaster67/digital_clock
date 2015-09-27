$(document).ready(function(){

  // $("#hours").text()
  setInterval(function(){
    var dateTime = new Date();
    var minutesTwoDigitsWithLeadingZero = ("0" + dateTime.getMinutes()).substr(-2);
    var myMinutes = dateTime.getMinutes();
    var myHours = dateTime.getHours();
    var colors = ['green', 'brown', 'orange', 'yellow'];
    var color = Math.floor(Math.random() * colors.length);
    $("#milliseconds").text(dateTime.getMilliseconds());
    $("#seconds").text(dateTime.getSeconds());
    $("#minutes").text(minutesTwoDigitsWithLeadingZero);
    $("#hours").text(dateTime.getHours());
	if(myMinutes %2===0){
		$("body").css("background-color", "black");
	}

		else if(myMinutes %3===0) {
			$("body").css("background-color", "blue");
     	}
   	
    if(myHours %2===0){
     	$("#clock").css("color", colors[color]);
     }
        else if(myHours %3===0){
     		$("#clock").css("color", "white");
     }

  },100);

// 	setInterval(function(){
// 	var colors = ['green', 'brown', 'orange', 'yellow'];
//     var color = Math.floor(Math.random() * colors.length);
//     $("body").css("background-color", colors[color]);
// }, 300000);

})

//*********************************************************
//I need a random function to apply the var colors 
//If it is an odd minute make the background color change to 
//black and if it is even minute make the background change to another color.

//to change the clock text every hour
//Every 5 minutes, change the background color to a random color.

//var color = Math.floor(Math.random() * colors.length);
//$("body").css("background-color", colors[color]);

//setInterval(function(){ 
    //code goes here that will be run every 5 mins.
    //$("body").css("color", colors[color]);    
//}, 300000);

//var hexArray = ['#hexVal','#hexVal','#hexval', '#hexval']
//var randomColor = hexArray[Math.floor(Math.random() * hexArray.length)];



