/**
 * 内置操作系统模块的使用
 */
 const os = require("os");
 console.log("操作系统类型：",os.type());
 console.log("操作系统平台：",os.platform());
 console.log("系统内存总量：",os.totalmem(),"字节");
 console.log("系统空闲内存：",os.freemem(),"字节");
 console.log("系统CPU信息如下：");
 console.log(os.cpus());