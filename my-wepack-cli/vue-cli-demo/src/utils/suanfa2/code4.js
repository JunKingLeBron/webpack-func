/* 请计算n*m的棋盘格子（n为横向的格子数，m为竖向的格子数）从棋盘左上角出发沿着边缘线从左上角走到右下角，总共有多少种走法，要求不能走回头路，即：只能往右和往下走，不能往左和往上走。

注：沿棋盘格之间的边缘线行走

数据范围： 1 \le n,m \le 8 \1≤n,m≤8 


输入描述：
输入两个正整数n和m，用空格隔开。(1≤n,m≤8)

输出描述：
输出一行结果

示例1
输入：
2 2
复制
输出：
6 */


const readline = require("readline");
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const test = function (n, m) {
    if (n <= 0 || m <= 0) {
        return 1
    } else {
        return test(n - 1, m) + test(n, m - 1)
    }
}
rl.on("line", function (line) {
    line = line.trim().split(' ');
    console.log(test(line[0], line[1]));
});
