/* 描述
实现删除字符串中出现次数最少的字符，若出现次数最少的字符有多个，则把出现次数最少的字符都删除。输出删除这些单词后的字符串，字符串中其它字符保持原来的顺序。

数据范围：输入的字符串长度满足 1 \le n \le 20 \1≤n≤20  ，保证输入的字符串中仅出现小写字母
输入描述：
字符串只包含小写英文字母, 不考虑非法输入，输入的字符串长度小于等于20个字节。

输出描述：
删除字符串中出现次数最少的字符后的字符串。

示例1
输入：
aabcddd
复制
输出：
aaddd */
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        let arr = line.split('');
        let obj = {}
        for(let v of arr) {
            if(obj[v]) {
                obj[v] = obj[v] + 1
            }else {
                obj[v] = 1
            }
        }
        let min = arr.length
        for (let key in obj) {
            if (obj[key] < min) {
                min = obj[key]
            }
        }
        let res = ''
        for (let v of arr) {
            if (obj[v] !== min) {
                res+=v
            }
        }
        console.log(res)
    }
}()