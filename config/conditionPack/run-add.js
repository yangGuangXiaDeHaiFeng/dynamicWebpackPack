const fs = require('fs');
// 异步读取
fs.readFile('./config/router.ts', function (err, data) {
  if (err) {
    return console.error(err);
  }
  fs.writeFile('./config/router.config.ts', data.toString(), function (err) {
    if (err) {
      return console.error(err);
    }
    console.log('数据还原成功！');
    console.log('--------我是分割线-------------');
    fs.unlink('./config/router.ts', function (err, data) {
      if (err) {
        return console.error(err);
      }
      console.log('临时文件删除成功！');
    });
  });
});
