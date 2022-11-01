/* let arr = ['g', 'z', 'f', 'e', 'a', 'c']
console.log(arr.sort())
let arr1 = [3, 4, 0, 121, 2, 8, 99]
console.log(arr1.sort((a, b) => {return a -b })) */

//const { reverse } = require("dns");

/* 输入一个 int 型整数，按照从右向左的阅读顺序，返回一个不含重复数字的新的整数。
保证输入的整数最后一位不是 0 。

数据范围： 1 \le n \le 10^{8} \1≤n≤10 
8
  
输入描述：
输入一个int型整数

输出描述：
按照从右向左的阅读顺序，返回一个不含重复数字的新的整数

示例1
输入：
9876673
复制
输出：
37689
 */
/* const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        let arr = line.split('').reverse()
        const str = [...new Set(arr)].join('')
        console.log(str)

    }
}() */


const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        console.log(Array.from(line).reverse().join(''))
    }
}()