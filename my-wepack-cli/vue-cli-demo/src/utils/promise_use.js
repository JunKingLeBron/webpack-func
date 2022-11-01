const promise = new Promise((resolve, reject) => {
    //resolve('成功')
    reject('失败')
})
promise.then(
    (result) => { 
        console.log(result)
        throw new Error('失败的')
    },
    (err) => {
        console.log('fail', err)
        return(err)
    }

   
).then(
    (res) => { console.log('链式调用1',res)},
    (err) => { console.log('链式调用1', err)}
)
