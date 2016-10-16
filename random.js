function Random() {
	var array = []; // 
	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min)) + min;
	}

	this.myRandom = function (limit){
		var rand = getRandomInt(0, limit);
		if(array[rand] == undefined) {
			array[rand] = 1;
			return rand;
		} else {
			while(true) {
			if(rand > limit - 1) {
				rand = 0;
			}
			if(array[rand] === undefined){
				array[rand] = 1;
				return rand;
			}
			rand++;
			}
		}
	}
}