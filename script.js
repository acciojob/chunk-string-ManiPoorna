function stringChop(str, size) {
  // your code here
	if(str.length == 0){
		return [];
	}
	if(str.length <= size){
		return str
	}
	
	let ans = [];
	let index= 0;
	for (let i = 0; i < str.length/size+1; i++) {
		let n = size;
		let chip = "";
		while (n>0) {
			if (str.charAt(index)!==undefined) {
				chip+=str.charAt(index);
				index++;
			}
			n--;
		}
		ans.push(chip)
	}
	return [ans];
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));

