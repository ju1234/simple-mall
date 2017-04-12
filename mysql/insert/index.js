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


// var text = ['【天猫超市】长城窖酿解百纳红酒干红葡萄酒750ml*6瓶国产整箱装',
// '青岛啤酒爆款经典系列PK德国啤酒500ml*12听*2箱 镇店之宝',
// '江小白北上广同款白酒国产清香型高粱粮食酒45度100ml*2瓶*2盒装',
// '拉菲红酒官方正品原瓶进口巴斯克花园干红葡萄酒6支装送木箱',
// 'RIO锐澳鸡尾酒预调酒超值套餐混合装275ml*24瓶洋酒',
// '新日期 法国原装进口啤酒克伦堡1664白啤酒250mL×24瓶整箱',
// '澳图红酒 法国原瓶进口干红买一箱送一箱金标赤霞珠红葡萄酒整箱',
// '酒划算 法国进口凯旋1664白啤酒250ml*12瓶整箱6种口味水果味整箱',
// '进口啤酒 德国啤酒 保拉纳 柏龙小麦啤酒 整箱500mL*24',
// '山西汾酒杏花村酒 竹叶青酒45度500mL*6瓶装国产清香型白酒'];
// var data = [];
// for(var i = 1;i<11;i++){
//   var a = {};
//   a.price = parseInt(Math.random() * 1000);
//   a.sales = parseInt(Math.random() * 10000);
//   a.synopsis = text[i - 1];
//   data.push(a);
// }
//
// insert(data,'wine');


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

module.exports = insert;

