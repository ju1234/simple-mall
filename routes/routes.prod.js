var path = require('path');
const axios = require('axios')
var routesPath = require('../src/tools/routePaths.js');

module.exports = function (app, cb) {
  let urlArray = [];
  for (let key in routesPath) {
    urlArray.push(routesPath[key])
  }
  console.log(path.join(path.resolve('./static'), 'index.html'))


  app.get(urlArray, (req, res, next) => {
    res.sendFile(path.join(path.resolve('./static'),'/dist/index.tpl'));
    // next()
  });



  app.post('/users', (req, res, next) => {
    console.log(req.body);
    res.json(JSON.stringify([
      {
        id: 1,
        name: 'jufei'
      },
      {
        id: 2,
        name: 'zhangsan'
      }
    ]));
    next();
  });

  let doubanApi = axios.create({
    baseURL: 'http://api.douban.com/',
    timeout: 10000,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.110 Safari/537.36',
      Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    }
  });
  app.get('/douban/*', (req, res, next) => {
    var reqUrl = req.url;
    let url1 = 'http://api.douban.com/v2/movie/in_theaters';
    doubanApi.get(reqUrl.split('douban/')[1])
      .then(data => {
        res.json(data.data)
      })
      .catch(err => {
        console.error(err)
      });


  });
};

console.log('路由已挂载');
