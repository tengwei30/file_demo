const express = require('express');
const morgan = require('morgan');
const router = require('./router');
const path = require('path');
const errorhandler = require('errorhandler');

const app = express()

// 配置静态资源路径
app.use('/public', express.static(path.join(__dirname, './public')))
app.use('/node_modules', express.static(path.join(__dirname, './node_modules')))

// 配置模版引擎
app.engine('html', require('express-art-template'))
app.set('view options', { // art-template 模版引擎配置
  debug:process.env.NODE_ENV !== 'production'
})
app.set('views', path.join(__dirname, 'views')) // 模版文件的存粗目录
app.set('view engine', 'html') // 可以省略的模版文件后缀名

app.use(morgan('dev'))  // 配置日志
app.use(express.json()) // 处理请求体中的json格式
app.use(express.urlencoded({
  extended: true
}))

const PORT = process.env.PORT || 3000;


app.use(router)

// 挂载统一处理服务器错误的中间件
// app.use(errorHandler())
if (process.env.NODE_ENV === 'development') {
  // only use in development
  app.use(errorhandler())
}

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})