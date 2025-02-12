
//🟩 // find min number
// const arrNum=[2,3,6,7,12,-3,5,-11,23,1]
//
// const findMinNumber=(arr)=>{
//     let minNum = arr[0]
//     for (let i =0; i<arr.length; i++){
//         if(minNum > arr[i]){
//             minNum=arr[i]
//         }
//     }
//     return minNum
// }
// console.log(findMinNumber(arrNum))

// // 🟩 find max number
// const arrNum=[2,3,6,100,7,12,-3,5,-11,23,1]
// const findMaxNumber= (arr)=>{
//     let maxNum = arr[0]
//     for (let i =0; i<arr.length;i++ ){
//         if(maxNum < arr[i]){
//             maxNum= arr[i]
//         }
//     }
//     return maxNum
// }
//
// console.log(findMaxNumber(arrNum))

// // 🟩 factorial
// const factorial = (n) => {
//   return (n!==1) ? n*factorial(n-1):1
// }
//     console.log( factorial(5) ); // 120

// 🟩 Fibonacci numbers
const fibonacci = (n)=>{
    let a = 1
    let b = 1
    for(let i = 3; i<= n; i++){
        let c = a+b
        a=b
        b=c
    }
    return b
}
console.log(fibonacci(7))