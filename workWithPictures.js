function workWithPictures(w, h){
	var arrayPictures = [];
	var matrixOfNumbers = [];
	var random = new Random();
	createArrayPicture(w,h);
	changePicture();

	function createArrayPicture(w,h) {
		var countPictures = w*h;
		var temp = 0;
		var number = 0; // number of picture
		for(let i = 0; i < w; i++) {
			matrixOfNumbers[i] = [];
			for(let j = 0; j < h; j++){
				matrixOfNumbers[i][j] = 0;
			}
		}
		while(temp < countPictures) {
			if(number == 10) {
				number = 0;
			}
			var first = random.myRandom(countPictures);
			matrixOfNumbers[Math.floor(first / h)][first % h] = number;

			var second = random.myRandom(countPictures);
			matrixOfNumbers[Math.floor(second / h)][second % h] = number;
			number++;
			temp += 2;
		}

		temp = 0;
		for(var i = 0; i < w; i++) {
			for(var j = 0; j < h; j++){
				arrayPictures.push(new createObject(temp, matrixOfNumbers[i][j])); 
				temp++;
			}
		}
	}
		function createObject(position, numberPicture){
			this.position = position
			this.numberPicture = numberPicture;
			this.isVisible = false;
			this.isDisable = false;
		}

	function changePicture() {
		var check = 0;
		var table = document.getElementById("game");
		var tempObject;

		table.onclick = function (event) {
			var target = event.target;
		  	var td = target.closest('td');
		  	if(!arrayPictures[td.id].isDisable) {
		  		if(!arrayPictures[td.id].isVisible) {
		  			var url = "https://kde.link/test/" + arrayPictures[td.id].numberPicture + ".png";
		  			document.getElementById('img'+td.id).src = url;
		  			arrayPictures[td.id].isVisible = true;
		  			check++;
		  			if(tempObject) {
		  				if(tempObject.position !== td.id && tempObject.numberPicture === arrayPictures[td.id].numberPicture && check < 3){
		 					var url = 'https://d2e111jq13me73.cloudfront.net/sites/all/themes/commonsense/images/favicons/favicon-96x96.png';
		 						setTimeout(function(){
		  						document.getElementById('img' + td.id).src = url;
		 						document.getElementById('img' + tempObject.position).src = url;
		 						tempObject.isDisable = true;
		 						arrayPictures[td.id].isDisable = true;
		 						tempObject = null;
		 						check = 0;
		 						}, 300);

		  				} else {
		  					var url = 'http://icdn.pro/images/en/p/e/penguin-icone-9062-96.png';
		  					setTimeout(function(){
		  						document.getElementById('img' + td.id).src = url;
		 						document.getElementById('img' + tempObject.position).src = url;
		 						tempObject.isVisible = false;
		 						arrayPictures[td.id].isVisible = false;
		 						tempObject = null;
		 						check = 0;
		 					}, 300);
		  				
		  				}
		  			} else {
		  				tempObject = arrayPictures[td.id];
		  			}
		  		} else {
		  			if(check < 2){
		  			var url = 'http://icdn.pro/images/en/p/e/penguin-icone-9062-96.png';
		  			document.getElementById('img' + td.id).src = url;
		  			arrayPictures[td.id].isVisible = false;
		  			tempObject = null;
		  			check = 0;
		  			}
	  			}	
	  		}
	  	}
	}
}