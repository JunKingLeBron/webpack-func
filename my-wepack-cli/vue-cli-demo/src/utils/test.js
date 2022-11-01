let a = [1, 2, 4, 4]
console.log([...new Set(a)])

let b = Array.from(a, (x) => x *2)
console.log(b);

let obj = {
    '0': 'one',
    '1': 'two',
    length: 2
}
console.log(Array.from(obj))

let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};


// ES6 的写法
let arr2 = Array.from(arrayLike);
console.log(arr2)

console.log(Array.of(1,2,4,19,10)) //总是返回一组参数组成的数组， 没有则返回空数组
console.log(Array.of(null, undefined)) //总是返回一组参数组成的数组， 没有则返回空数组

let c = [1, 4, 5 , -1, -6]
//find findIndex findLast findLastIndex // 返回匹配条件的第一个值，或者匹配值得索引 
console.log(c.find((val, idx, arr) => val < 0))
console.log(c.findIndex((val, idx, arr) => val < -2))
//这两个方法都可以接受第二个参数，用来绑定回调函数的this对象。
//find()函数接收了第二个参数person对象，回调函数中的this对象指向person对象。
function f(v){
    return v > this.age;
  }
let person = {name: 'John', age: 20};
[10, 12, 26, 15].find(f, person);    // 26

//entries keys values  返回一个遍历器对象
console.log(['a', 'b'].keys())

for (let index of ['a', 'b'].keys()) {
    console.log(index)
}
for (let val of ['a', 'b'].values()) {
    console.log(val)
}
for (let [index, val] of ['a', 'b'].entries()) {
    console.log(index, val)
}

//可以使用遍历器的next方法进行遍历
let letter = ['a', 'b', 'c'];
let entries = letter.entries();
console.log(entries.next().value); // [0, 'a']
console.log(entries.next().value); // [1, 'b']
console.log(entries.next().value); // [2, 'c']

// flat flatMap   将嵌套的数组拉平， 添加到原理的位置 ， 会跳过空位
console.log([1, 3, [4, 5, [6, 7]]].flat(2)) //传入的数字表示要拉平的嵌套层数， 默认1 
console.log([1, 3, [4, 5, [6, 7]]].flat(Infinity)) //Infinity 可以拉平任意层

// flatMap()方法对原数组的每个成员执行一个函数（相当于执行Array.prototype.map()），
// 然后对返回值组成的数组执行flat()方法。该方法返回一个新数组，不改变原数组。
console.log([1, 3, 4, 5].flatMap(x => [x * 2]))

// at arr, string 查找对应索引的字符  
console.log([1, 3, 4].at(-1))
console.log([{name: 1, key: 1}, {name: 2, key: 2}].at(-1))