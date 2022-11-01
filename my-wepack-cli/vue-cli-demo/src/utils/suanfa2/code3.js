/* 描述
输入 n 个整型数，统计其中的负数个数并求所有非负数的平均值，结果保留一位小数，如果没有非负数，则平均值为0
本题有多组输入数据，输入到文件末尾。

数据范围：1 \le n \le 50000 \1≤n≤50000  ，其中每个数都满足 |val| \le 10^{6} \∣val∣≤10 
6
  
输入描述：
输入任意个整数，每行输入一个。

输出描述：
输出负数个数以及所有非负数的平均值

示例1
输入：
-13
-4
-7
复制
输出：
3
0.0 */

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

let arr = []
let num = 0
let total = 0
let tNum = 0
void async function () {
    // Write your code here
    while(line = await readline()){
        arr.push(parseInt(line))
    }
}().then(() =>{
    for (let v of arr) {
        if (String(v).includes('-')) {
            num++
        } else {
            total+=v
            tNum++
        }
    }
    console.log(num)
    console.log(num === arr.length ? '0.0' : (total/tNum).toFixed(1))
})