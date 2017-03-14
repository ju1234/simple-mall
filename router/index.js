/**
 * 文件说明: server router
 * 详细描述:
 * 创建者: ju1234
 * 创建时间: 17.3.14
 * 变更记录:
 */

Router = require('koa-router'),
  send = require('koa-send'),
  router = new Router();

// 主页
async function index() {
  // console.log('session', this.session);
  // if (this.session.view === undefined) { //统计访问次数
  //   this.session.view = 0;
  //   this.session.like = 'apple';
  // } else {
  //   this.session.view += 1
  // }

  // console.log(this);
  // await this.render('index',{body: 'hello'});
  //get方式数据
  // if (this.request.get('cookie')) {
  // this.response.body = 'asd';
  // console.log(this);
  // }
  //   var cookie = this.request.header.cookie;
  //   if (cookie.token !== undefined && cookie.token === 'asdads4665488a6ds4866') {
  //     await send(this, './static/hello.html');
  //   } else {
  //     await send(this, './static/test.html');
  //   }
  // } else {
  //   await send(this, './static/test.html');
  // }
}

router
  .get('/', index)
  .get('/user/:id', async function () {
    await send(this, './static/hello.html');
  })
  .post('/api/login', async function () {
    var data = (await mySql.select('*', 'user', `where user.username='${this.request.body.username}'`))[0];

    if (data.password === this.request.body.password) {
      this.response.body = JSON.stringify({
        pass: true,
        msg: '验证通过',
        token: 'asdads4665488a6ds4866',
        href: `http://192.168.0.112:8888/user/${data.name}`
      });
    } else {
      this.response.body = JSON.stringify({
        pass: false,
        msg: '密码不正确',
        token: null
      })
    }
  });

module.exports = router;