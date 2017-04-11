/**
 * 文件说明： mysql 配置
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.7
 */
var select = require('./select'),
  insert = require('./insert'),
  update = require('./update');

module.exports = {
  select: select,
  insert: insert,
  update: update
};
