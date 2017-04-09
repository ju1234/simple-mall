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

  console.log(query);

  pool(query);

}

var text = ['春夏衬衫男士长袖衬衣青少年纯棉复古休闲学生工装打底韩版修身潮',
'春夏衬衫男长袖衬衣青少年学生休闲牛津纺男士式纯色时尚韩版修身',
'哈伦裤男宽松小脚长裤子休闲运动裤束脚学生收口卫裤2017新款春季',
'弹力休闲裤男裤青年修身直筒春秋款男士秋季长裤子黑色商务小脚裤',
'男士长袖衬衫薄款英伦春季格子商务休闲青年中年修身型男寸衬衣服',
'春夏季男士休闲裤青年韩版修身小脚裤男裤宽松运动直筒长裤潮裤子',
'春夏季中年男士休闲裤宽松直筒西裤中老年男裤春秋男装爸爸长裤子',
'2017春季男士夹克衫中年爸爸男装春秋韩版棒球领修身青年薄款外套',
'Youngor/雅戈尔春秋新款长袖衬衫 男士商务正装免烫职业条纹衬衣',
'墨麦客男装春季新品休闲男士针织衫毛衣男开衫V领薄款外套潮3011'];
var data = [];
for(var i = 1;i<11;i++){
  var a = {};
  a.classify_id = 2;
  a.classify_name = '男装';
  a.price = parseInt(Math.random() * 1000);
  a.sales = parseInt(Math.random() * 1000);
  a.url = `/synopsis/manClothing/${i}`;
  a.src = `/images/goods/manClothing/${i}.jpg`;
  a.synopsis = text[i - 1];
  data.push(a);
}

insert(data,'goods');
// insert([
//   {
//     classify_id: 4,
//     classify_name: '女装',
//     price: 12,
//     sales: 34,
//     url: '/synopsis/4',
//     src: '/images/frock/4.jpg',
//     synopsis: '夏季雪纺连衣裙女长袖中长款春秋2017新款韩版显瘦时尚小碎花裙子'
//   }
// ],'goods');


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

// module.exports = insert;

