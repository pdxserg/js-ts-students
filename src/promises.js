const promisefetch= ((url)=>{
    return new Promise((res, rej)=>{
        return setTimeout(()=>{
            res: "resolve"
            // rej: "reject"
        },200)
    })
})

const promise = promisefetch("google.com")
console.log(promise)