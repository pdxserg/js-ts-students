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

console.log("start")

const delay = ((ms)=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res()
        },ms)
    })
})
delay(2000).then(()=>{
    console.log("Hello")})

console.log("end")

