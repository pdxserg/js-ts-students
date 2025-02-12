
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

// 🟩 find max number
const arrNum=[2,3,6,100,7,12,-3,5,-11,23,1]
const findMaxNumber= (arr)=>{
    let maxNum = arr[0]
    for (let i =0; i<arr.length;i++ ){
        if(maxNum < arr[i]){
            maxNum= arr[i]
        }
    }
    return maxNum
}

console.log(findMaxNumber(arrNum))