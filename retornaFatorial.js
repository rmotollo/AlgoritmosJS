function factorialize(num) {
    if (num === 0) {return 1}
    let factorial = num;
    for(let i = num - 1; i >= 1; i--){
        factorial *= i;       
    };
    return factorial;
  }

  function factorializeRecursion(num) {
    if (num === 0) {
      return 1;
    }
    return num * factorialize(num - 1);
  }
  
  factorialize(5);
  
  console.log(factorialize(0));