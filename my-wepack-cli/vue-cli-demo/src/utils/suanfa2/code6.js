const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        const num = parseInt(line)
        const arr = []
        for (let i = 1; i <= num; i++) {
            arr.push([])
        }
        let a = 1
        for (let i = 0; i < num; i++) {
            for(let j = i; j >= 0; j--) {
                arr[j].push(a)
                ++a
            }
        }
        arr.forEach((e,i) => {
            console.log(e.join(' '))
        })
    }
}()
