const promise = new Promise((resolve, reject) => {
    resolve('it worked')
})

promise.then((data) => {
    console.log(data)
})