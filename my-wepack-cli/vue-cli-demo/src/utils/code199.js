class EventListener {
    constructor() {

    }
}

EventListener.prototype.addEventlistener = function (eleId,eventName , fn) {
    window.addEventListener(eventName, fn)
    
}

EventListener.prototype.removeEventlistener  = function (eleId,eventName , fn) {
    document.getElementById(eventName).removeEventListener(eventName, fn)
}
EventListener.prototype.addEventlistenerOnce  = function (eleId,eventName , fn) {
    document.getElementById(eventName).addEventlistenerOnce(eventName, fn)
}
EventListener.prototype.removeall  = function (eleId,eventName) {
    document.getElementById(eventName).remo
}


function throttle (fn, time) {
    let timer
    return () => {
        if (timer) return
        let _this = this
        timer = setTimeout(() => {
            fn.apply(_this)
            timer = null
        }, time);
    }
}