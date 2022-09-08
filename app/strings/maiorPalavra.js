function findLongestWordLength(str) {
    let strArray = str.split(' ');
    let biggestWord = strArray[0];
    for (let i in strArray){
      let nextWordIndex = i++;
      if(strArray[nextWordIndex].length > biggestWord.length){
        biggestWord = strArray[nextWordIndex];
      }
    }
    return biggestWord.length;
  }
  
  function findLongestWithMap(str){
    return Math.max(...str.split(" ").map(word => word.length));
  }
  let teste = findLongestWordLength("May the force be with you");
  console.log(teste)