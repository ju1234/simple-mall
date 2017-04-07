/**
 * 文件说明： mysql 插入借口
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.7
 */


var pool = require('../createPool');


function insert(data, table) {
  let query = `insert into ${table} (`;
  const fields = Object.keys(data[0]);
  fields.forEach(field => {
    query += `${field},`
  });


  query = query.substring(0, query.length - 1) + ')';

  query += ' values (';

  fields.forEach(field => {
    if (typeof data[0][field] === 'string') {
      query += `'${data[0][field]}',`
    } else {
      query += `${data[0][field]},`
    }
  });

  query = query.substring(0, query.length - 1) + ');';

  data.shift();
  if (data.length !== 0) {
    insert(data, table)
  }

  pool(query);

}


insert([{a: 1, b: 'ad'}, {v: 'asd', c: 123}], 'user');


module.exports = insert;

