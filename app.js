const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')

// 引用路由器
const routes = require('./routes')

// 引入record model
const Record = require('./models/record')

// 將request經過body parser處理
app.use(bodyParser.urlencoded({ extended: true }))
// 用app.use規定每一筆資料都要先經過method-override前置處理
app.use(methodOverride('_method'))
// 將request導入路由器
app.use(routes)

// 新增handlebar helper: sum功能
const Handlebars = require('handlebars')
Handlebars.registerHelper('sum', function (records) {
  let sum = 0
  records.forEach(record => sum += record.amount)
  return sum
  });

// 引入mongoose
require('./config/mongoose')

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// 告訴express靜態檔案位置，以利載入
app.use(express.static('public'))


// Listen and start the app
app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`)
})