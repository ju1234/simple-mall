/**
 * 文件说明： 创建连接池
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.7
 */


var sql = require('mysql');


const pool = sql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mall',
  acquireTimeout: 10000,//获取到连接之前，触发超时的毫秒数（默认：10000）
  waitForConnections: true,//当资源池没有可用连接时是否将请求加入队列（默认：  true）
  connectionLimit: 10,//连接池最大连接数（默认：10）
  queueLimit: 10,// 连接池没有连接可用时，队列的最大长度（默认： 0）
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
          }else {
            rej(err);
            console.log('query err',err)
          }
        });
        connection.release();
      }
    });
  })
}

for (var i = 10;i<21;i++){
  mysql(`update goods set src='/images/goods/manClothing/${i}' where id=${i};`);
}

module.exports = mysql;
