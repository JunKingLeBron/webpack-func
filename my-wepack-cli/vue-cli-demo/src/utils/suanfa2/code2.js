/* 描述
输入一个只包含小写英文字母和数字的字符串，按照不同字符统计个数由多到少输出统计结果，如果统计的个数相同，则按照ASCII码由小到大排序输出。
数据范围：字符串长度满足 1 \le len(str) \le 1000 \1≤len(str)≤1000 

输入描述：
一个只包含小写英文字母和数字的字符串。

输出描述：
一个字符串，为不同字母出现次数的降序表示。若出现次数相同，则按ASCII码的升序输出。

示例1
输入：
aaddccdc
复制
输出：
cda
复制
说明：
样例里，c和d出现3次，a出现2次，但c的ASCII码比d小，所以先输出c，再输出d，最后输出a.
 */
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        let obj = {}
        for(let v of line) {
            if (obj[v]) {
                obj[v]+=1
            } else {
                obj[v] = 1
            }
        }
        let arr = []
        for (let key in obj) {
            arr.push({
                name: key,
                value: obj[key]
            })
        }
        let newArr = arr.sort((x, y) => {
            return y.value > x.value ? 1 : y.value < x.value ? -1 : x.value === y.value ? 
            x.name.charCodeAt(0) - y.name.charCodeAt(0) : ''
        })
        let str = ''
        newArr.forEach(item => {
            str+=item.name
        })
        console.log(str)
    }
}()