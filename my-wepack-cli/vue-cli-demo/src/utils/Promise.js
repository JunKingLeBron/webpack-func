//手写Promise
class MyPromise {
    static PENDING = '待定'; static FULFILLED = '成功'; static REJECTED = '拒绝'
    constructor(fn) {
        this.status = MyPromise.PENDING;
        this.result = null;
        this.resolveCallbacks = [];
        this.rejectCallbacks = []
        try {
            fn(this.resolve.bind(this), this.reject.bind(this))
        } catch (error) {
            this.reject(error)
        }
    }
    
    resolve(result) {
        setTimeout(() => {
            if (this.status === MyPromise.PENDING) {
                this.status = MyPromise.FULFILLED;
                this.result = result
                this.resolveCallbacks.forEach(callback => {
                    callback(result)
                })
            } 
        })
    }
    reject(result) {
        setTimeout(() => {
            if (this.status === MyPromise.PENDING) {
                this.status = MyPromise.REJECTED;
                this.result = result
                this.rejectCallbacks.forEach(callback => {
                    callback(result)
                })
            }
        })
    }
    then(onFUlFILLED, onREJECTED) {
        return new MyPromise((resolve, reject) => {
            onFUlFILLED = typeof onFUlFILLED === 'function' ? onFUlFILLED : () => {};
            onREJECTED = typeof onREJECTED === 'function' ? onREJECTED : () => {};
            if (this.status === MyPromise.PENDING) {
                this.resolveCallbacks.push(() => {
                    try {
                        resolve(onFUlFILLED(this.result))
                    } catch (error) {
                        reject(error)
                    }
                });
                this.rejectCallbacks.push(() => {
                    try {
                        reject(onREJECTED(this.result))
                    } catch (error) {
                        reject(error)
                    }
                })
            }
            if (this.status === MyPromise.FULFILLED) {
                setTimeout(() => {
                    try {
                        resolve(onFUlFILLED(this.result))
                    } catch (error) {
                        reject(error)
                    }
                })
            }
            if (this.status === MyPromise.REJECTED) {
                setTimeout(() => {
                    try {
                        reject(onREJECTED(this.result))
                    } catch (error) {
                        reject(error)
                    }
                })
            }
        })
    }
}
console.log('第一步')
let promise = new MyPromise((resolve, reject) => {
    console.log('第二步')
    setTimeout(() => {
        console.log(promise.status)
        resolve('成功的')
        console.log(promise.status)
        //reject('失败的')
        console.log('第四步')
    })
    
})
promise.then(
    //undefined,
    result => {
        console.log('1', result)
        return(result)
    },  // 执行的then 里面的 onFUlFILLED方法
    result => {console.log(result.message)}   //定义的then方法 里面的 onREJECTED方法
).then(
    res => { console.log('2', res)},
    err => { console.log('2-链式调用', err)}
)
console.log('第三步')


// promise.then 是微任务， setTimeout是宏任务
// 存在同步代码先执行同步代码， 在执行微任务 then方法， 再去执行宏任务setTimeout



// ▪ 首先，执行console.log('第一步')，输出 ‘第一步’

// ▪ 第二步，创建promise，执行函数体里的console.log('第二步')，输出 '第二步'

// ▪ 第三步，遇到setTimeout，setTimeout是宏任务，将setTimeout加入宏任务队列，等待执行

// ▪ 第四步，遇到promise.then()，promise.then()是微任务，将promise.then()加入微任务队列，等待执行

// ▪ 第五步，执行console.log('第三步')，输出 '第三步'，此时当前执行栈已经清空

// ▪ 第六步，当前执行栈已经清空，先执行微任务队列的任务 promise.then()，发现promise的状态并没有改变，还是pending，所以没有输出。状态并没有改变的原因是：resolve('这次一定')是在setTimeout里的，但此时还没开始执行setTimeout，因为setTimeout是宏任务，宏任务在微任务后面执行

// ▪ 第七步，微任务队列已经清空，开始执行宏任务 setTimeout：
