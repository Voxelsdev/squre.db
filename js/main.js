window.onload = function(){
	var //data = new File('../DATA/data.txt').toString(),
	//data2 = fs.readFileSync('../DATA/data2.txt').toString(),
	//main = loadArr(data),
	//prod = loadArr(data2),
	canvas = document.getElementById('canvas'),
	ctx = canvas.getContext('2d'),
	tabInpt = document.getElementById('tabInpt'),
	searchbar = document.getElementById('searchterm'),
	btn_update = document.getElementById('submit'),
	pers_togg = document.getElementById('personToggle'),
	comp_togg = document.getElementById('companToggle'),
	prod_togg = document.getElementById('producToggle'),
	searchSub = document.getElementById('submit'),
	res1 = document.getElementById('result1'),
	res2 = document.getElementById('result2'),
	res3 = document.getElementById('result3'),
	res4 = document.getElementById('result4'),
	res5 = document.getElementById('result5'),
	res6 = document.getElementById('result6'),
	res7 = document.getElementById('result7'),
	res8 = document.getElementById('result8'),
	res9 = document.getElementById('result9'),
	res10 = document.getElementById('result10'),
	res11 = document.getElementById('result11'),
	res12 = document.getElementById('result12'),
	res13 = document.getElementById('result13'),
	res14 = document.getElementById('result14'),
	res15 = document.getElementById('result15'),
	res16 = document.getElementById('result16'),
	res17 = document.getElementById('result17'),
	res18 = document.getElementById('result18'),
	res19 = document.getElementById('result19'),
	res20 = document.getElementById('result20'),
	perName = document.getElementById('name'),
	perAddr = document.getElementById('address'),
	perComp = document.getElementById('company'),
	perPhon = document.getElementById('phone'),
	w = canvas.width,
	h = canvas.height,
	numRows = main.length,
	numCols = main[0].length,
	colWidth = 100,
	colHeight = 50,
	offsetX = 0,
	offsetY = 0,
	mouseX = 0,
	mouseY = 0,
	mouseUp = false,
	addingRow = 0,
	addingCol = 0,
	clickedRow = 0, 
	clickedCol = 0,
	leftClick = false,
	rightClick = false,
	searchType = -1,
	alt = true,
	clickedInfo = 0;
	var tabs1 = [];
	var tabs2 = [];
	var resBtns = [];
	var resultArray = [];

	for(i = 0; i < numRows; i++){
		tabs2.push([]);
		for( j = 0; j < numCols; j++){
			tabs2[i].push([]);
		    new tab(j * colWidth, i * colHeight, colWidth, colHeight, checkNull(main[i][j]));
		}
	}
	for(i = 1; i < 21; i++){
		new resBtn(i);
	}
}

document.onmousemove = function(e) {
	e = window.event || e;
	var cRe = canvas.getBoundingClientRect();
	mouseX = e.clientX - cRe.left;
	mouseY = e.clientY - cRe.top;
};

document.onmousedown = function(e) {
	if (e.which === 1) {
		//Left Click
		leftClick = true;
	    rightClick = false;
	} else {
		//Right Click
		leftClick = false;
	    rightClick = true;
	}
	loop: for(i = 0; i < tabs2.length; i++){
			for(j = 0; j < tabs2[0].length; j++){
				if(mouseTest(tabs[i][j])){
				clickedRow = i;
				clickedCol = j;
				if(inSight(tabs2[i][j])){
					tabInpt.focus;
					if(leftClick){
						tabInpt.value = tabs2[i][j].text;
					} else if (rightClick){
						//tabInpt.value = tabs2[i][j].note;
					}
				}
				break loop;
			}
		}
	}
}

btn_update.addEventListener('click', function(){
	tabs2[clickedRow][clickedCol].text = tabInpt.value;
	main[clickedRow][clickedCol] = tabInpt.value;
	updateDat();
});

pers_togg.addEventListener('click', function(){
	searchType = 0;
});

comp_togg.addEventListener('click', function(){
	searchType = 1;
});

prod_togg.addEventListener('click', function(){
	searchType = 2;
});

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
}, false);

function resize(){
	w = canvas.width;
	h = canvas.height;
}

function search(){
	switch(searchType){
		case 0:
			PplSearch();
			break;
		case 1:
			CompSearch();
			break;
		case 2:
			ProdSearch();
			break;
		default:
			return -1;
	}
}

function PplSearch(){
   var pos = ""; 
       sub = "",
       ctrl = 0,
       input = searchbar.value;
   resultArray = [];
   for(i = 0; i < main.length; i++){
      pos = main[i][0][0];
      ctrl = pos.length - input.length;
      if(ctrl > 0){
         pers : for(j = 0; j < ctrl; j++){
            sub = pos.substring(j, j + input.length);
            if(sub.toLowerCase() === input.toLowerCase()){
               //add to results list
               resultArray.push(pos);
               break pers;
            }
         }
      }
   }
   for(i = 0; i < resultArray.length; i++){
   		var resultposit = 'result' + (i + 1);
   		docuement.getElementById(resultposit).innerHTML = resultArray[i];
   		updateResults();
   }
}

function CompSearch(){
   var pos = ""; 
       sub = "",
       ctrl = 0,
       input = searchbar.value;
   resultArray = [];
   for(i = 0; i < main.length; i++){
      pos = main[i][1];
      ctrl = pos.length - input.length;
      if(ctrl > 0){
         pers : for(j = 0; j < ctrl; j++){
            sub = pos.substring(j, j + input.length);
            if(sub.toLowerCase() === input.toLowerCase()){
               //add to results list
               resultArray.push(pos);
               break pers;
            }
         }
      }
   }
   for(i = 0; i < resultArray.length; i++){
   		var resultposit = 'result' + (i + 1);
   		docuement.getElementById(resultposit).innerHTML = resultArray[i];
   		updateResults();
   }
}

function ProdSearch(){
   var pos = "";  
       sub = "",
       ctrl = 0,
       input = searchbar.value,
       temp = [];
   for(i = 0; i < prod.length; i++){
      pos = prod[i];
      ctrl = pos.length - input.length;
      if(ctrl > 0){
         pers : for(j = 0; j < ctrl; j++){
            sub = pos.substring(j, j + input.length);
            if(sub.toLowerCase() === input.toLowerCase()){
               //add to results list
               temp.push(pos);
               break pers;
            }
         }
      }
   }
   for(i = 0; i < temp.length; i++){
   		var resultposit = 'result' + (i + 1);
   		document.getElementById(resultposit).innerHTML = temp[i];
   		updateResults();
   }
}


//reminder to remove clickedinfo
function displayInfo(num){
	
}

function updateResults(){
	for(i = 0; i < 20; i++){
		var tempPos = 'result' + i;
		//resBtns[i].result = document.getElementById(tempPos).innerHTML;
		resBtns[i].result = resultArray[i]
	}
}

function loadArr(str){
	return JSON.parse(str);
}

function updateDat(){
	for( i = 0; i < tabs2.length; i++){
		main[i] = [];
		for( j = 0; j < tabs2[i].length; j++){
			main[i][j] = tabs2[i][j];
		}
	}
	var fs = require('fs');
	fs.writeFile('../DATA/data.txt', '');
	fs.writeFile('../DATA/data.txt', JSON.stringify(main));
	fs.writeFile('../DATA/data2.txt', '');
	fs.writeFile('../DATA/data2.txt', JSON.stringify(prod));
}

function addRow(){
	main.push([]);
	for(i = 0; i < numCols; i++){
		main[main.length-1].push([]);
	}
	numRows = main.length;
	numCols = main[0].length;
	colWidth = w / numCols;
	colHeight = h / numRows;
	updateDat();
}

function addCol(input){
	for( i = 0; i < main.length; i++ ){
		if ( !i ) {
			main[0].push(input);
		} else {
			main[i].push(null);
		}
	}
	numRows = main.length;
	numCols = main[0].length;
	colWidth = w / numCols;
	colHeight = h / numRows;
	prod.push(input);
	updateDat();
}

/*function removeCol(which){
	for(i = 0; i < main.length; i++){
		main[which-1].splice(1,1);
	}
}*/

function checkNull(input){
	if(typeof(input) != null){
		return input;
	}		
	return('');
}

function sliderXInput(value){
	offsetX = (value / 100) * (colWidth * numCols);
}

function sliderYInput(value){
	offsetY = (value / 100) * (colHeight * numRows);
}

function inSight(obj){
	if( obj.x + colWidth + (offsetX * -1) > 0 &&
	    obj.x < w + (offsetX * -1) &&
	    obj.y + colHeight > 0 + offsetY &&
	    obj.y < h + offsetY ){
		return true;
	}
	return false;
}

function mouseTest(obj){
	if (obj.x < mouseX + (offsetX * -1) && 
		obj.x + colWidth > mouseX + (offsetX * -1) &&
		obj.y < mouseY + (offsetY * -1) &&
		obj.y + colHeight > mouseY + (offsetY) ){
        return true;
    }
    return false;
}

function resBtn(pos){
	this.pos = pos;
	this.result = "";
}

function tab(x, y, w, h, text){
	tabs1.push(this);
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.text = text;
	this.drawing = true;
	if(addingCol === numCols){
		addingRow++;
		addingCol = 0;
	}
	this.row = addingRow;
	this.col = addingCol;
	tabs[addingRow][addingCol].push(this);
	addingCol++;
}

tab.prototype.draw = function(){
	if(inSight(this)){
		ctx.globalAlpha = .2;
		if(mouseTest(this)){
			ctx,fillStyle = '#ff1a40';
		} else {
			ctx.fillStyle = '#ff8499';
		}
		ctx.fillRect(this.x - this.offsetX, this.y - this.offsetY, this.w, this.h);
		ctx.globalAlpha = 1;
		ctx.moveTo(this.x, this.y);
		ctx.lineTo(this.x + colWidth, this.y);
		ctx.moveTo(this.x + colWidth, this.y);
		ctx.lineTo(this.x + colWidth, this.y + colHeight);
		ctx.moveTo(this.x + colWidth, this.y + colHeight);
		ctx.lineTo(this.x, this.y + colHeight);
		ctx.moveTo(this.x, this.y + colHeight);
		ctx.lineTo(this.x, this.y);
		ctx.font = '15px Open Sans';
		ctx.fillText(this.text, (this.x + (colWidth / 2) - this.text.length * 2) - this.offsetX, (this.y + (colHeight / 2) - 7.5) - this.offsetY );
	}
}

function update(){
	ctx.clearRect(0,0,w,h);
	ctx.fillStyle = canvas.style.backgroundColor;
	ctx.fillRect(0,0,w,h);
	for(i = 0; i<tabs1.length; i++){
		tabs1[i].draw();
	}
}
thread = setInterval(update, 1000/60);