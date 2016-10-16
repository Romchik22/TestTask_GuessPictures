window.onload = function() {

	init();
	
	function init() {
	
	var size, 
		xhr = new XMLHttpRequest();

		xhr.open('GET', 'https://kde.link/test/get_field_size.php', true);
		xhr.onload = function() {
			size = JSON.parse(this.response);
			//createArrayPicture(size.width, size.height);
			Random();
			workWithPictures(size.width, size.height);
			createField(size.width, size.height);
		}
		xhr.onerror = function() {
			alert( 'Ошибка ' + this.status );
		}
		xhr.send();
		//changePicture();
	}

	function createField(w, h){		
		var count = 0,
			gField = [];
        for (let i = 0; i < w; i++) {
			gField[i] = new Array(h);
		}  

   		var hT = "<table id='game-table' cellpadding='0' cellspacing='0'>"; 
        for (let j = 0;j < h; j++) {
            hT += "<tr>";
        	for (let i = 0;i < w; i++) { 
	    		hT += "<td id='" + count + "'>";
    			hT += "<img id='img" + count + "'src='http://icdn.pro/images/en/p/e/penguin-icone-9062-96.png' alt=' ' >"; 
    			hT += "</td>";
				count++;
     		}
     		hT += "</tr>"; 
        }

    document.getElementById('game').innerHTML = hT+"</table>";
    }
}