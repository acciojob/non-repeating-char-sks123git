function firstNonRepeatedChar(str) {
  let charMap = new Map()
	for (let index = 0; index < str.length; index++) {
		charMap[str[index]] = (charMap[str[index]] || 0) + 1
	}
	for(const [key, val] of Object.entries(charMap)) {
	    if(val === 1) { 
	       return key
	        break
	    }
	}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
