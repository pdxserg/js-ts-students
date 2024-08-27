// let user ={
//     name: "Dimych",
//     age:13,
//     address:{
//         city:{
//             title: "Minsk"
//         }
//     }
// }
// //console.log(user.address.city.title)
// //console.log(user["address"]["city"]["title"])
// let user1 ={
//     '0': 'Dimych',
//     '1': 'Valera'
// }
// // console.log(user1['0'])
//  user1 ['table']= "brown"
// // console.log(user1)
//  console.log(user1["table"]) //brown
//
// console.log(Object.keys(user1))//[ '0', '1', 'table' ]
//
// console.log(Object.values(user1))//[ 'Dimych', 'Valera', 'brown' ]



// const   numbers =[1,3,5,1,7,0,-2]
// let a = numbers[0]
// for (let i = 0; i<numbers.length; i++){
//     if(a > numbers[i+1]){
//         a= numbers[i+1]
//     }
// }
// console.log(a)


const   fruits =["apple", "ddd", "apple", "banan", "orange" , "banan"]
let appleCount =0
for (let i = 0; i<fruits.length; i++){
    if (fruits[i]=== 'apple'){
        appleCount++
   }
}
console.log(appleCount)