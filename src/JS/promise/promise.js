Promise.resolve()
// .then(()=>{
//     console.log(1)
//     throw new Error()
// })
//     .then(()=>{console.log(2)})
//     .catch(()=>{console.log(3)})
//     .finally(()=>{console.log(4)})
//     .then(()=>{console.log(5)})

Promise.resolve()
    .then(()=>{console.log(2)})
    .then(()=>{
        console.log(1)
        throw new Error()
    })
    .catch(()=>{console.log(3)})
    .then(()=>{console.log(5)})
