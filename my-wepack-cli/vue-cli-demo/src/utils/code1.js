/* 描述
明明生成了NN个1到500之间的随机整数。请你删去其中重复的数字，即相同的数字只保留一个，
把其余相同的数去掉，然后再把这些数从小到大排序，按照排好的顺序输出。

数据范围： 1 \le n \le 1000 \1≤n≤1000  ，输入的数字大小满足 1 \le val \le 500 \1≤val≤500 
输入描述：
第一行先输入随机整数的个数 N 。 接下来的 N 行每行输入一个整数，代表明明生成的随机数。 具体格式可以参考下面的"示例"。
输出描述：
输出多行，表示输入数据处理后的结果

示例1
输入：
3
2
2
1
复制
输出：
1 */

const readline = require("readline");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let arr = []
let idx = 0
let num = 0
rl.on("line", function (line) {
    idx++
    if (idx === 1) {
        num = parseInt(line)
    } else {
        arr.push(parseInt(line))
        if (arr.length === num) {
            let res = [...new Set(arr)]
            res.sort((a, b) => {return a-b}).forEach(v => console.log(v))
        }
    }
    
})
/* 描述
•输入一个字符串，请按长度为8拆分每个输入字符串并进行输出；

•长度不是8整数倍的字符串请在后面补数字0，空字符串不处理。
输入描述：
连续输入字符串(每个字符串长度小于等于100)

输出描述：
依次输出所有分割后的长度为8的新字符串

示例1
输入：
abc
复制
输出： 
abc00000*/

/* const r2 = require("readline").createInterface({ input: process.stdin });
var iter = r2[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        let str = line
        let num = line.length % 8
        if (num === 0) {
            str = line
        } else {
            for (let i = 0; i < 8 - num; i++) {
                str = str + '0'
            }
        }
        let n = str.length/8
        for (let i = 0; i < n; i++) {
            console.log(str.substr(8*i, 8))
        }
        
    }
}() */


/* 
题型：三道题是简单+简单+中等难度的题型。第一二题可能会是循环、数组、字符串、栈这些，第三题会难一点，二分查找、动态规划、DFS、BFS这些。 
参考资料：可看一下leetcode网的典型练习题目，编号如下：
字符串：3，49，30
线性表：86，16，27，732
队列：641，406，899
栈：946，116，117，895
哈希表：61，729，25，554
dfs：105，112，98，494，547，1254
bfs：1091，1129，102，101，752 
*/
