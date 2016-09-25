var clicking = false;
var winW = window.innerWidth;
var winH = window.innerHeight;

/**
//Not updating constantly/on drag. Find alternative solution(?)
function resizeWindows(){
	clicking = true;
	var search = document.getElementById('search');
	while(clicking){
		search.style.width = mouseX;
		info.style.width = winW - search.style.width;
	}
}
*/

window.onmousemove = function(e) {
    rect = canvas.getBoundingClientRect();
    mouseX = e.clientX;
	//mouseY = Math.round(e.clientY);
};

document.onmouseup = function(e) {
	clicking = false;
}

document.addEventListener("contextmenu", function(e) {
    //Click Right
    e.preventDefault();
}, false);

function pplsearch(){
	//Did this for testing
	console.log("ppl found");
	
}
function setText(){
	console.log("test1");
	
}