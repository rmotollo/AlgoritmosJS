var search = function(nums, target) {
    let leftPointer = 0;
    let rightPointer = nums.length - 1;
    while(rightPointer >= leftPointer){
        midPointer = Math.floor((rightPointer+leftPointer)/2)
        if (nums[midPointer] === target){
             return midPointer ;
        } else if(nums[midPointer] > target){
            rightPointer = midPointer - 1;
            
        } else{
            leftPointer = midPointer + 1;
            
        }         
    }
    return -1;
};

let arr = [-1,0,3,5,9,12];
console.log(search(arr, 10));