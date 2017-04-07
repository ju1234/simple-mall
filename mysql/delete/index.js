/**
 * 文件说明： mysql 删除接口
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.7
 */


var pool = require('../createPool');


module.exports = function (sql) {
  pool(sql)
};
