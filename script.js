function firstNonRepeatedChar(str) {
   let charMap = {};

  for (let i = 0; i < str.length; i++) {
    charMap[str[i]] = (charMap[str[i]] || 0) + 1;
  }

  for (const key in charMap) {
    if (charMap[key] === 1) {
      return key;
    }
  }

  return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
