
class MyQueue {
    constructor() {
        this.stack = []
    }
}

MyQueue.prototype.push = function (x) {
    this.stack.push(x)
}


MyQueue.prototype.pop = function () {
    const tempStack = []
    while (this.stack.length) {
        tempStack.push(this.stack.pop())
    }
    const ret = tempStack.pop()
    while (tempStack.length) {
        this.stack.push(tempStack.pop())
    }
    return ret
}

const stackToQueues = new MyQueue()

stackToQueues.push(1)
stackToQueues.push(2)
stackToQueues.push(3)

console.log("出队", stackToQueues.pop())
console.log("出队", stackToQueues.pop())
console.log('队列',stackToQueues.stack)



//数组扁平化
function fla (arr) {
    return arr.reduce((prev, curr) => {
        return prev.concat(Array.isArray(curr) ? fla(curr) : curr)
    }, [])
}

console.log(fla([1, 3, 4, [1, 2], [42]]))

//节流  规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。


function throttle (fn, wait) {
    let prev = 0
    return (...args) => {
        let now = new Date()
        if (now - prev > wait) {
            fn.apply(this, args)
            prev = now;
        }
    }
}


//防抖   在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。

function debounce (fn, wait) {
    let timer 
    return (...args) => {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, args)  
        }, wait);
    }
}

/* 总结
函数防抖和函数节流都是防止某一时间频繁触发，但是这两兄弟之间的原理却不一样。
函数防抖是某一段时间内只执行一次，而函数节流是间隔时间执行。 */

/* 结合应用场景

debounce

search搜索联想，用户在不断输入值时，用防抖来节约请求资源。
window触发resize的时候，不断的调整浏览器窗口大小会不断的触发这个事件，用防抖来让其只触发一次


throttle

鼠标不断点击触发，mousedown(单位时间内只触发一次)
监听滚动事件，比如是否滑到底部自动加载更多，用throttle来判断

作者：薄荷前端
链接：https://juejin.cn/post/6844903669389885453
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 */


//实现 new
function myNew(fn, ...args) {
    let newObj = Object.create(fn)

    let res = fn.apply(newObj, args)

    return typeof res === 'object' ? res : newObj

    //如果执行结果又返回值是一个对象，返回执行的结果， 否则， 返回新创建的对象
}

//滚动到页面顶部、

function scrollTop () {
    //获取滚动的高度
    const height = document.documentElement.scrollTop || document.body.scrollTop
    if (height > 0) {
        //浏览器每次重绘都会调用这个方法
        window.requestAnimationFrame(scrollTop)
        //滚动到指定坐标
        window.scrollTo(0, height - height/8)
    }
}
//btn.addEventListener('click', scrollTop)

//滚动到元素的位置
const scrollElement = (ele) => {
    //scrollIntoView 将调用的元素， 滚动到浏览器可见区域
    document.querySelector(ele).scrollIntoView({behavior: 'smooth'})
    
}
document.querySelector('button').addEventListener('click', function() {
    //滚动到对应元素位置
    scrollElement('h2')
})
// 获取当前的时间
function getTime (date = new Date()) {
    //获取年份
    let y = date.getFullYear()
    //获取月份
    let m = date.getMonth() + 1
    m = m < 10 ? '0' + m : m
    //获取天数
    let d = date.getDate()
    d = d < 10 ? "0" + d : d
    return `${y}/${m}/${d}`
}
//获取当月的第一天和最后一天  ,最后一天， 时间反推
// 0 当前月的第一天的前一天
function getFirstLastDay() {
    let now = new Date()
    let y = now.getFullYear()
    let m = now.getMonth()
    let firstDay = new Date(y, m, 1) //本月开始的时间
    let lastDay = new Date(y, m+1, 0) //本月的最后一天
    firstDay = firstDay.getMonth() + 1 + '/' + "0" + firstDay.getDate()
    lastDay = lastDay.getMonth() + 1 + '/' + lastDay.getDate()
    return { firstDay, lastDay}
}
//列表模糊查询
const searchQuery = (list, keyweord, attr = 'name') => {
    const reg = new RegExp(keyweord)
    const arr = []
    list.forEach(item => {
        if (reg.test(item[attr])) {
            arr.push(item)
        }
    });
    return arr;
}