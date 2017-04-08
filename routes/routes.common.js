/**
 * 文件说明： 公用路由
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.7
 */


module.exports = (app) => {
  app.get(['/synopsis','/synopsis/'], function (req, res, next) {
    res.redirect('/');
  });
};
