// Promise.resolve()
// .then(()=>{
//     console.log(1)
//     throw new Error()
// })
//     .then(()=>{console.log(2)})
//     .catch(()=>{console.log(3)})
//     .finally(()=>{console.log(4)})
//     .then(()=>{console.log(5)})
//
// Promise.resolve()
//     .then(()=>{console.log(11)})
//     .then(()=>{
//         console.log(12)
//         throw new Error()
//     })
//     .catch(()=>{console.log(13)})
//     .then(()=>{console.log(14)})

// const tasks = async ()=>{
//     console.log(1)
//     await new Promise((res,rej)=>{
//         console.log(10)
//         res()
//     }).then(()=>{console.log(2)})
//     setTimeout(()=>{
//         Promise.resolve().then(()=>{console.log(3)})
//         console.log(3.1)
//         Promise.resolve().then(()=>{console.log(3.2)})
//     },0)
//     setTimeout(()=>{console.log(4)},0)
//     Promise.resolve().then(()=>{console.log(5)})
//     console.log(6)
// }
// tasks()