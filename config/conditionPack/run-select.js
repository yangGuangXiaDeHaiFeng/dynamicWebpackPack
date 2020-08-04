const fs = require('fs');
const { exec } = require('child_process');
const [, , param] = process.argv;
if (param) {
  const allSystem = require('./subsystems');
  const paramData = `   routes: [
      {
        path: '/',
        redirect: '/welcome',
      },
      {
        path: '/welcome',
        name: 'welcome',
        component: './Welcome.tsx',
      },
          ${allSystem[param].toString()},
          {
            component: './404',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
];`;
  // 异步读取
  fs.readFile('./config/router.config.ts', function (err, data) {
    if (err) {
      return console.error(err);
    }
    const fileData = data.toString();
    const substringData = fileData.substring(fileData.lastIndexOf('routes'));
    const finalFileData = fileData.replace(substringData, paramData);
    console.log('----------备份路由文件----');
    fs.copyFile('./config/router.config.ts', './config/router.ts', function (err, data) {
      if (err) {
        return console.error(err);
      }
      console.log('----------根据条件修改路由文件----');
      fs.writeFile('./config/router.config.ts', finalFileData, function (err) {
        if (err) {
          return console.error(err);
        }
        console.log('----------路由文件修改成功----');
        console.log('----------执行打包命令----');
        exec('umi build', (error, stdout, stderr) => {
          if (error) {
            console.error(`执行出错: ${error}`);
            return;
          }
          console.log('----------打包结束----');
          console.log('--------恢复路由文件-------------');
          exec('node config/conditionPack/run-add.js', (e) => {
            if (e) {
              console.error(`执行出错: ${e}`);
              return;
            }
          });
        });
      });
    });
  });
} else {
  // 如果没有带任何参数，则代表打包全部=====>直接打包
  console.log('----------没有任何条件，打包全部----');
  exec('umi build', (error, stdout, stderr) => {
    if (error) {
      console.error(`执行出错: ${error}`);
      return;
    }
    console.log('----------打包结束----');
  });
}
