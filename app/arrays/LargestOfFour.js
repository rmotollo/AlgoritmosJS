function largestOfFour(arr) {
    let newArr = [];
    for (let i = 0; i <= arr.length - 1; i++){
       let subarr = arr[i];
       let biggestValue = subarr[0];
        for (let j = 1; j <= subarr.length - 1; j++){
            if(subarr[j] > biggestValue){
                biggestValue = subarr[j];
            }            
        } 
        newArr.push(biggestValue);
    }
    return newArr;
  };
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));