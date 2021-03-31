/**
 * @author jiaowang
 * @version 1.0.0
 * @since 2021
 *  使用node 读取一个JSON文件，并将其转为对象（Object）
 */
const path = require('path');
const fs = require('fs');

const rootPath = path.resolve(__dirname, '../../');
console.log('__dirname', __dirname);
console.log('rootPath', rootPath);

const configPath = path.join(rootPath, 'config.json');
console.log('configPath', configPath);

const fsInfo = fs.readFileSync(configPath).toString();
console.log('fsInfo', fsInfo);

const fileInfoObj = JSON.parse(fsInfo);
console.log('fileInfoObj', fileInfoObj);
