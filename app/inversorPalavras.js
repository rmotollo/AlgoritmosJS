function reverseString(str) {
    let strArray = str.split('');
    let newStr = [];
    for (let i = strArray.length - 1 ; i >= 0; i--){
      newStr.push(strArray[i]);
    }
    return newStr.join('');
  }
  
  
  console.log(reverseString("hello"));