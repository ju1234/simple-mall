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

  console.log(query)

  pool(query);

}

//
// insert([
//   {
//     id: 1,
//     name: '女装',
//     url: '/classify/frock',
//     src: '/images/classifyIcon/frock.jpg'
//   },
//   {
//     id: 2,
//     name: '男装',
//     url: '/classify/manClothing',
//     src: '/images/classifyIcon/manClothing.jpg'
//   },
//   {
//     id: 3,
//     name: '女鞋',
//     url: '/classify/womenShoes',
//     src: '/images/classifyIcon/womenShoes.jpg'
//   },
//   {
//     id: 4,
//     name: '男鞋',
//     url: '/classify/manShoes',
//     src: '/images/classifyIcon/manShoes.jpg'
//   },
//   {
//     id: 5,
//     name: '箱包',
//     url: '/classify/luggage',
//     src: '/images/classifyIcon/luggage.jpg'
//   },
//   {
//     id: 6,
//     name: '化妆品',
//     url: '/classify/toiletry',
//     src: '/images/classifyIcon/toiletry.jpg'
//   },
//   {
//     id: 7,
//     name: '零食',
//     url: '/classify/snack',
//     src: '/images/classifyIcon/snacks.jpg'
//   },
//   {
//     id: 8,
//     name: '家电',
//     url: '/classify/appliance',
//     src: '/images/classifyIcon/appliance.jpg'
//   },
//   {
//     id: 9,
//     name: '图书',
//     url: '/classify/books',
//     src: '/images/classifyIcon/books.jpg'
//   },
//   {
//     id: 10,
//     name: '酒水',
//     url: '/classify/wine',
//     src: '/images/classifyIcon/wine.jpg'
//   },
// ], 'classify');

module.exports = insert;

