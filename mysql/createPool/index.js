/**
 * 文件说明： 创建连接池
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.7
 */


var sql = require('mysql'),
  path = require('path'),
  recordLog = require('../../log/record.log.js');


const pool = sql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mall',
  acquireTimeout: 10000,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 10,
});


function mysql(sql) {
  return new Promise((res, rej) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.log('pool err', err);
        rej(err);
      } else {

        connection.query(sql, (err, data) => {
          if (!err) {
            res(data);
          } else {
            rej(err);
            console.log('query err', err)
          }
        });
        connection.release();
      }
    });
  })
}

module.exports = mysql;
