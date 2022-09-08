
function largestOfFour(arr) {
    return arr.reduce((val,cur) => Math.max(val,cur))
}

let max = largestOfFour([1, 2, 3, 4])
console.log(max)

console.log(largestOfFour([3,12,8,9]))