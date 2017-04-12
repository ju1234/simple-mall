/**
 * 文件说明： 日志生成器
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.11
 */

var fs = require('fs'),
moment = require('moment');


module.exports = recordLog = (filepath,data) => {
  let log = fs.readFileSync(filepath,'utf8');
  fs.writeFileSync(filepath,`${log}  \n${moment().format('LLL')}          ${data}`,'utf8');
};




