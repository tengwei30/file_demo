const FileUtils = require('../util/files.js')
const path = require('path')
// 获取目标目录
const DATA_DIR= path.join(__dirname, '../some/path')
exports.showIndex = async (req, res, next) =>{
  try {
    res.render('index')
  } catch(err) {
    next(err)
  }
}


exports.files = async (req, res, next) => {
  try {
    const data = await FileUtils.geFileList(DATA_DIR)
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Content-Type', 'application/json');
    res.status(200).json({
      msg: 'success',
      code: '00000',
      data
    })
  } catch (err) {
    next(err)
  }
}