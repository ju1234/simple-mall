/**
 * 文件说明： 分类详情页 路由信息
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.8
 */


export default function (pathname) {
  switch (pathname){
    case '/classify/frock':
      return {
        name: '女装',
          id: 1
      };
    case '/classify/manClothing':
      return {
        name: '男装',
        id: 2
      };
    case '/classify/womenShoes':
      return {
        name: '女鞋',
        id: 3
      };
    case '/classify/manShoes':
      return {
        name: '男鞋',
        id: 4
      };
    case '/classify/luggage':
      return {
        name: '箱包',
        id: 5
      };
    case '/classify/toiletry':
      return {
        name: '化妆品',
        id: 6
      };
    case '/classify/snack':
      return {
        name: '零食',
        id: 7
      };
    case '/classify/appliance':
      return {
        name: '电器',
        id: 8
      };
    case '/classify/books':
      return {
        name: '图书',
        id: 9
      };
    case '/classify/wine':
      return {
        name: '酒水',
        id: 10
      };
  }
}
