const fs = require('fs');

// 获取所有文件夹里面的文件信息
exports.geFileList = async (path) => {
  let filesList = [] // 用来存放所有文件和文件夹数据
  readFile(path,filesList);
  return filesList;
}

// 读取文件
const readFile = (path, filesList) => {
  const files = fs.readdirSync(path);
  files.forEach(file => {
    states = fs.statSync(`${path}/${file}`);
    const obj = new Object();
    obj.size = states.size; //文件大小，以字节为单位
    obj.name = file;//文件名
    obj.path = `${path}/${file}`;
    filesList.push(obj);
  });
}

