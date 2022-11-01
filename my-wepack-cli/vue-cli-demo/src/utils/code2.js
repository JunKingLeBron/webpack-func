/* console.log(a)
var a = 1
var a = function() {
    console.log(1)
}
a() */
/* 描述
求一个int类型数字对应的二进制数字中1的最大连续数，例如3的二进制为00000011，最大连续2个1

数据范围：数据组数：1\le t\le 5\1≤t≤5 ，1\le n\le 500000\1≤n≤500000 
进阶：时间复杂度：O(logn)\O(logn) ，空间复杂度：O(1)\O(1) 
输入描述：
输入一个int类型数字

输出描述：
输出转成二进制之后连续1的个数 */

var A = new Number(675)
let aStr = A.toString(2).toString()

let arr = aStr.split('0')
let res = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > res) {
        res = arr[i].length
    }
}
//return res
console.log(res)

/* 现在有一种密码变换算法。
九键手机键盘上的数字与字母的对应： 1--1， abc--2, def--3, ghi--4, jkl--5, mno--6, pqrs--7, tuv--8 wxyz--9, 0--0，把密码中出现的小写字母都变成九键键盘对应的数字，如：a 变成 2，x 变成 9.
而密码中出现的大写字母则变成小写之后往后移一位，如：X ，先变成小写，再往后移一位，变成了 y ，例外：Z 往后移是 a 。
数字和其它的符号都不做变换。
数据范围： 输入的字符串长度满足 1 \le n \le 100 \1≤n≤100  */

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        // 定义密码字典
        let pwd = line
        const pwdObj = {
            'abc':2,
            'def':3,
            'ghi':4,
            'jkl':5,
            'mon':6,
            'pqrs':7,
            'tuv':8,
            'wxyz':9
        }
        const keys = Object.keys(pwdObj)
        // 替换小写字母
        pwd = pwd.replace(/[a-z]/g,e=>{
            let str = e;
            keys.forEach(key=>{
                key.includes(e) ? str = pwdObj[key] : ''
            })
            return str
        })
        // 替换大写往后移动一位
        pwd = pwd.replace(/[A-Z]/g,e=>{
            if(e==='Z'){
                return 'a'
            } else {
                return String.fromCharCode(e.toLowerCase().charCodeAt(0)+1)
            }
        })
        console.log(pwd)
    }
}()


/* 将一个字符串str的内容颠倒过来，并输出。

数据范围：1 \le len(str) \le 10000\1≤len(str)≤10000  */

let str = 'I am a student'

let arr1 = Array.from(str)
console.log(arr1.reverse().join(''))


/* 给定一个字符串描述的算术表达式，计算出结果值。

输入字符串长度不超过 100 ，合法的字符包括 ”+, -, *, /, (, )” ， ”0-9” 。

数据范围：运算过程中和最终结果均满足 |val| \le 2^{31}-1 \∣val∣≤2 
31
 −1  ，即只进行整型运算，确保输入的表达式合法
输入描述：
输入算术表达式

输出描述：
计算出结果值 */

let line = '400/(8 + 2) + 8*2'
line =  line.replace(/\s*/g, "")
console.log(line)
let reg = /^[0-9]|[+-/()*]$/
let isReg = true
for(let temp of line) {
    if(!reg.test(temp)) {
        isReg = false
    }
}
if(isReg) {
    console.log(eval(line))
}

//字典排序

function alphabeticSorting(params) {
	return params.sort((a, b) => {
		let x = a.word,
			y = b.word;
		return x > y ? 1 : x < y ? -1 : 0;
	});
}

let words = [
	{
		id: 1,
		word: "absolute",
	},
	{
		id: 2,
		word: "every",
	},
	{
		id: 3,
		word: "display",
	},
	{
		id: 4,
		word: "border",
	},
	{
		id: 5,
		word: "cab",
	},
	{
		id: 6,
		word: "cba",
	},
	{
		id: 7,
		word: "bca",
	},
    {
		id: 1,
		word: "abcolute",
	},
    
    //cab cba bca
];

console.log(alphabeticSorting(words));
