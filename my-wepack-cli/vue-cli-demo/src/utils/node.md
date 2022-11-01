正则表达式：
 \ 转义符 ，将下一个字符标记为一个特殊字符 ， 或者原义字符

 * 匹配前面的子表达式 0次或多次
 + 匹配 1次或多次
 ？ 匹配0次或多次

 x|y 匹配x或y
 [xyz]字符集合， 匹配所包含的任意一个字符
 [^xyz]  取反，匹配未包含的任意字符
 [a-z] 字符范围，匹配范围内的任意字符
 \b 匹配一个单词边界， 也就是值单词和空格间的位置， 例如： er\b 可以匹配never中的 er
 \d 匹配一个数字字符 [0-9]
 \D 匹配一个非数字字符 [^0-9]
 \n 匹配以后换行符
 \r 匹配一个回车符
 \s 匹配任意空白字符
 \S 匹配任何非空白字符
 \w 匹配字母，数字，下划线 [A-Za-z0-9_]
 \W 取反

 修饰符： 
 i 不区分大小写
 g 全局匹配
 m 多行匹配
 s  默认情况下的圆点 . 是匹配除换行符 \n 之外的任何字符，加上 s 修饰符之后, . 中包含换行符 \n。
var str="google\nrunoob\ntaobao";
var n1=str.match(/google./);   // 没有使用 s，无法匹配\n
var n2=str.match(/runoob./s);  // 使用 s，匹配\n


String对象方法：
slice(start, end) start包含， end不包含
substr(start, len) start包含， len截取的个数
substring(start, end) s包含， end不包含
toLowerCase() 转小写
toUpperCase() 大写

tirm 去除两边空白
toString() 返回一个字符串

Number对象方法

var num = new Number(value)
注意： 如果一个参数值不能转换为一个数字将返回 NaN (非数字值)。
Number.isNaN() 检测参数是否是NaN
toString() 数字装换为 字符串， 使用自动基数 ，二进制， 8进制， 16进制等
 Number(18).toString(2)
 new Number(89).toString(8)

 Number.isInteger()  检测参数是否为整数

 Math对象方法：
 Math.floor() 向下取整
 Math.ceil() 向上取整
 Math.round() 四舍五入
 Math.random 返回0 -1 之间的随机数