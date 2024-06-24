const promisefetch= ((url)=>{
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            // res ("resolve!!!")
              rej ("reject!!! eror")
        },200)
    })
})

const promise = promisefetch("google.com")
     console.log(promise)

promise.then ((data)=>{
    console.log(data)
})

  promise.catch ((err)=>{
      console.log("Catch", err)
  })