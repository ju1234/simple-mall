

var path = require('path');

module.exports = (app) => {
  app.get('/',(req,res,next) => {
    res.sendfile(path.join(__dirname,'../static/dist','index.html'));
    next()
  });
  app.get('/api/login',(req,res,next)=>{
    res.send('asd')
  })
};
