// console.log("start")
//
// const promisefetch= ((url)=>{
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             // res ("resolve!!!")
//               rej ("reject!!! eror")
//         },2000)
//     })
// })
//
// const promise = promisefetch("google.com")
//      console.log(promise)
//
// promise.then ((data)=>{
//     console.log(data)
// })
//
//   promise.catch ((err)=>{
//       console.log("Catch", err)
//   })
// promise.finally(()=>{
//     console.log("Finally")
// })
//---------------------
// console.log("start")
// setTimeout(() => {
//     console.log("begin")
// }, 1000)
//
// const delay = (() => {
//     return new Promise((res, rej) => {
//         res()
//         console.log("Promise")
//     })
// })
// delay(2000).then(() => {
//     console.log("Hello")
// })
//
// console.log("end")


//------------------------------

// const global ={
//     envirementRegister1:{counterCreater:function   },
//     outer:{null}
// }

function counterCreater (){
    //     envirementRegister2:{count: 0, void function  },
    //     outer:{enviremetRegister1}


    return ()=> {
        //     envirementRegister3:{  },
        //     outer:{enviremetRegister2}
        let count = 0
        console.log( ++count)
    }
}
 const count1 = counterCreater()
 const count2 = counterCreater()

count1()
count1()
count1()
count2()
count2()
count2()
console.log(count1 === count2)
console.log(count1 === counterCreater())