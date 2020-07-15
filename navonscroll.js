window.onmousemove = function(event) {myFunction(event)};
function myFunction(e) {
  var y = e.clientY;
  if(y <= 40){
    document.getElementById("navbar").style.top = "0";
  	setTimeout(function() {
	document.getElementById("navbar").style.top = "-70px";}, 7000);
  }
}