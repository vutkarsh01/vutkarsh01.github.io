window.onscroll = function() {
		console.log(window.pageYOffset);
		var l = document.getElementById("").scrollTop;
		if( l > "70px" )
		{
		 	document.getElementById("navbar").style.top = "0px";
		 	setTimeout(function() {
		 	document.getElementById("navbar").style.top = "-70px";}, 1000);
		}
}


