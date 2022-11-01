
/* 将两个整型数组按照升序合并，并且过滤掉重复数组元素。
输出时相邻两数之间没有空格。
输入描述：
输入说明，按下列顺序输入：
1 输入第一个数组的个数
2 输入第一个数组的数值
3 输入第二个数组的个数
4 输入第二个数组的数值

输出描述：
输出合并之后的数组

示例1
输入：
3
1 2 5
4
-1 0 3 2
复制
输出：
-101235
*/

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;


const contactArr = (str1, str2) => {
  const arr = Array.from(new Set([...str1.split(' '), ...str2.split(' ')].sort((a, b) => a - b)))

  console.log(arr.join(''))
}
const arr = []
let lineData
let flag

void async function () {
    // Write your code here
    while(lineData = await readline()){
        if (flag) {
            arr.push(lineData)
        }
        
        flag = !flag
        
        if(arr.length === 2) {
            contactArr(arr[0], arr[1])
        }
    }
}()
