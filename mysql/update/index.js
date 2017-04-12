/**
 * 文件说明： mysql update接口
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.7
 */


var pool = require('../createPool');


function update(target, table, condition) {
  let query = `update ${table} set `;
  let setArr = [];

  for(let key in target){
    let str = `${key}=`;
    if(typeof target[key] === 'string'){
      str += `'${target[key]}'`;
    }else {
      str += `${target[key]}`;
    }
    setArr.push(str);
  }

  query += `${setArr.join(',')} `;

  if(condition){
    query += condition;
  }

  query += ';';
  console.log(query);

  return pool(query);
}

update({cart: JSON.stringify([
  {
    id: 1,
    classify: 'frock'
  },
  {
    id: 2,
    classify: 'wine'
  }
])},'user','where id=1');


module.exports = update;
