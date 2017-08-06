function first (array, n) {

	var arrJoin = array.join(' ');
	var firstNum = [];

	if(arguments.length === 1){
		for(var i = 0; i < 1; i++){
			firstNum.push(array.shift());
		}
		firstNum = firstNum.join(' ');
		return firstNum;

	}else if(n < 2){
		for(var y = 0; y < n; y++){
			firstNum.push(array.shift());
		}
		firstNum = firstNum.join(' ');
		firstNum = Number(firstNum);

		return firstNum;
	}else {
		for(var x = 0; x < n; x++){
			firstNum.push(array.shift());
		}
	}
		return firstNum;
	}


function rest (array, index) {
	if(arguments.length > 1){
	   array.splice(0,index);
  }else {
     array.shift();
  }
	return array
}

function contains (array, target, fromIndex) {

var answer;

    for(var i = 0; i < array.length; i++){
      if(array[i] === target){
        answer = true;
      }else{
        answer = false;
      }
    }
    return answer
}

function compact (array) {

}
