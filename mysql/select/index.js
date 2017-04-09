/**
 * 文件说明： mysql 查询接口
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.7
 */


var pool = require('../createPool');


function select(target, table, condition) {
  let query = 'select ';
  if (target.length === 1) {
    query += target[0];
  } else {
    target.forEach((item, index) => {
      if (index === target.length - 1) {
        query += item;
      } else {
        query += `${item},`;
      }
    })
  }


  if(condition){
    query += ` from ${table} ${condition};`;
  }else {
    query += ` from ${table};`;
  }

  return pool(query);
}




module.exports = select;
