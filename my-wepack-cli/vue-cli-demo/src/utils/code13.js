/* 
找出字符串中第一个只出现一次的字符


数据范围：输入的字符串长度满足 1 \le n \le 1000 \1≤n≤1000 


输入描述：
输入一个非空字符串

输出描述：
输出第一个只出现一次的字符，如果不存在输出-1 */
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        let arr = line.split('');
        let obj = {}
        for (let v of arr) {
            if(obj[v]) {
                obj[v]+= 1
            } else {
                obj[v] = 1
            }
        }
        let str
        for (let v of arr) {
            if (obj[v] === 1) {
                str = v
                break;
            }
        }
        if (str) {
            console.log(str)
        } else {
            console.log(-1)
        }
    }
}()