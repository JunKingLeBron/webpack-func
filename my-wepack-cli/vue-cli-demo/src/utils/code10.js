/* 
描述
密码要求:

1.长度超过8位

2.包括大小写字母.数字.其它符号,以上四种至少三种

3.不能有长度大于2的包含公共元素的子串重复 （注：其他符号不含空格或换行）

数据范围：输入的字符串长度满足 1 \le n \le 100 \1≤n≤100 
输入描述：
一组字符串。

输出描述：
如果符合要求输出：OK，否则输出NG

示例1
输入：
021Abc9000
021Abc9Abc1
021ABC9000
021$bc9000
复制
输出：
OK
NG
NG
OK */
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
         let isOk = 'OK'
        // 长度是否超过8
        if(line.length <= 8) {
            isOk = 'NG'
        }
        // 判断包括大小写字母.数字.其它符号,以上四种至少三种
        let typeMap = new Set()
        for(let temp of line) {
            if(/^[a-z]$/.test(temp)) {
                typeMap.add('1')
            } else if(/^[A-Z]$/.test(temp)) {
                typeMap.add('2')
            } else if(/^[0-9]$/.test(temp)) {
                typeMap.add('3')
            } else {
                typeMap.add('4')
            }
        }
        if(typeMap.size < 3) {
            isOk = 'NG'
        }
        // 子串
        for(let i=0; i<= line.length - 3;i++){
            let str = line.substring(i,i+3)
            if(line.substring(i+1).includes(str)) {
                isOk = 'NG'
            }
        }
        console.log(isOk)
    }
}()