var bus =  {
    list: [],

    //订阅
    subscribe(callback) {
        this.list.push(callback)
    },
    //发布
    publish(val) {
        this.list.forEach(callback => {
            callback&&callback(val)
        })
    }
}


bus.subscribe((val) => {
    console.log(1111, val)
})
bus.subscribe((val) => {
    console.log(2222, val)
})
setTimeout(() => {
    bus.publish('第一次发布')
}, 0);
setTimeout(() => {
    bus.publish('第二次发布')
}, 1000);