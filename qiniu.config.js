/**
 * 文件说明： 七牛云 配置
 * 详细描述：
 * 创建者： JU
 * 时间： 17.3.31
 */
var qiniu = require('qiniu');
var fs = require('fs');
var path = require('path'),
  colors = require('colors');
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});
console.log('webpack finish'.info);
console.log('qiniu upload begin'.info);
qiniu.conf.ACCESS_KEY = 'NJjAW7ZM18-FnpRM6QnB1m1KRMGoIUsd2CI_ynTW';
qiniu.conf.SECRET_KEY = 'J6SpI1YMpfjxSfvZeYimLmgTPohuWPvM7Dc-5F_r';
// 七牛云上传方法
function qiniuUpload(key, filePath, bucket = 'ju1234') {
// 需要上传空间 bucket
// 上传文件名 key
// 需要上传的文件路径 filePath
  // 生成上传token
  function uptoken(bucket, key) {
    var putPolicy = new qiniu.rs.PutPolicy(bucket + ":" + key);
    return putPolicy.token();
  }
  const token = uptoken(bucket, key);
  return new Promise((res, rej) => {
    var extra = new qiniu.io.PutExtra();
    qiniu.io.putFile(token, key, filePath, extra, function (err, ret) {
      if (!err) {
        console.log(ret.hash, ret.key, ret.persistentId);
        res();
      } else {
        rej(err);
      }
    });
  })
}
// 遍历文件夹 上传所有文件
function mapFilesToQiniu(dirPath = path.join(__dirname,'static')) {
  fs.readdir(dirPath,(err,files) => {
    if(!err){
      files.map(file => {
        if(fs.statSync(path.join(dirPath,file)).isDirectory()){
          mapFilesToQiniu(path.join(dirPath,file))
        }else {
          const filePath = path.join(dirPath + '/' + file);
          const key = filePath.split('simple-mall/static/')[1];
          qiniuUpload(key,filePath);
        }
      })
    }else {
      console.log(err)
    }
  });
}
mapFilesToQiniu(path.join(__dirname,'static'));
