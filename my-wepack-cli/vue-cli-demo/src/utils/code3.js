/* 
兄弟单词要求和原来的单词不同。例如： ab 和 ba 是兄弟单词。 ab 和 ab 则不是兄弟单词。
现在给定你 n 个单词，另外再给你一个单词 x ，让你寻找 x 的兄弟单词里，按字典序排列后的第 k 个单词是什么？
注意：字典中可能有重复单词。

数据范围：1 \le n \le 1000 \1≤n≤1000 ，输入的字符串长度满足 1 \le len(str) \le 10 \1≤len(str)≤10  ， 1 \le k < n \1≤k<n 
输入描述：
输入只有一行。 先输入字典中单词的个数n，再输入n个单词作为字典单词。 然后输入一个单词x 最后后输入一个整数k
输出描述：
第一行输出查找到x的兄弟单词的个数m 第二行输出查找到的按照字典顺序排序后的第k个兄弟单词，没有符合第k个的话则不用输出。
示例1
输入：
3 abc bca cab abc 1
输出：
2
bca 
*/
let str = '3 abc cab bca abc 1'

//第一种方法
let n = arr.shift() // 返回第一个元素， 影响原数组长度
let k = arr.pop()   //删除最后一个元素，返回删除的元素  ， idx    影响原数组长度
let x = arr.pop()  // 得到 x 目标元素  影响原数组长度

arr = arr.filter(el => el != x && Array.from(el).sort().join() == Array.from(x).sort().join())
let arrLen = arr.length
console.log(arrLen)
console.log(arrLen < k ? '' : arr.sort()[k-1])
let arr = str.split(' ')


//第二种方法
/* let wordNum = parseInt(arr[0])
let words = arr.slice(1, wordNum + 1)
let template = arr[wordNum + 1]
let templateStr = template.split('').sort().join()
const idx = arr[arr.length - 1]
const templateArr = []

for( let i = 0; i < words.length; i++) {
    const curStr =words[i].split('').sort().join()
    if (words[i] !== template && curStr === templateStr) {
        templateArr.push(words[i])
    }
}
console.log(templateArr.length)
if (parseInt(idx)) {
    console.log(templateArr.length < idx ? '' : templateArr.sort()[idx - 1]);
} */