/* MP3 Player因为屏幕较小，显示歌曲列表的时候每屏只能显示几首歌曲，用户要通过上下键才能浏览所有的歌曲。为了简化处理，假设每屏只能显示4首歌曲，光标初始的位置为第1首歌。


现在要实现通过上下键控制光标移动来浏览歌曲列表，控制逻辑如下：

歌曲总数<=4的时候，不需要翻页，只是挪动光标位置。

输入描述：
输入说明：
1 输入歌曲数量
2 输入命令 U或者D

输出描述：
输出说明
1 输出当前列表
2 输出当前选中歌曲 */
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

let len = 0
let idx = 0
void async function () {
    // Write your code here
    while(line = await readline()){
        idx++
        if (idx === 1) {
            len = parseInt(line)
        } else {
            const list = [];
            for (let i = 1; i <= len; i++) {
                list.push(i);
            }
            // 初始化显示歌曲和光标
            const start = 0;
            const end = len < 4 ? len : 4;
            let display = list.slice(start, end);
            let cursor = 0;
            let commands = line
            // 执行命令
            for (const command of commands) {
                
                // 根据命令更新光标位置
                if (command === "U") {
                    cursor--;
                }
                else if (command === "D") {
                    cursor++;
                }
                
                // 根据光标位置更新列表
                if (cursor === -1) {
                    display = list.slice(-4, len);
                    cursor = cursor + len;
                }
                else if (cursor === len) {
                    display = list.slice(0, 4);
                    cursor = cursor - len;
                }
                else {
                    const item = list[cursor];
                    if (command === "U" && display.includes(item) === false) {
                        display = list.slice(cursor, cursor + 4);
                    }
                    else if (command === "D" && display.includes(item) === false) {
                        display = list.slice(cursor - 3, cursor + 1);
                    }
                }
            }
            console.log(...display);
            console.log(list[cursor]);
            
        }
        
    }
}()