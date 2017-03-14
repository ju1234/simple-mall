/**
 * 文件说明: server端启动文件
 * 详细描述:
 * 创建者: ju1234
 * 创建时间: 17.3.14
 * 变更记录:
 */

var register = require('babel-core/register');

register({
  presets: ['stage-3']
});

require('./server.js');