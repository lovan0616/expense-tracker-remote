const express = require('express')
const app = express()
const PORT = 3000
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')

// 引用路由器
const routes = require('./routes')


// 將request經過body parser處理
app.use(bodyParser.urlencoded({ extended: true }))
// 用app.use規定每一筆資料都要先經過method-override前置處理
app.use(methodOverride('_method'))
// 將request導入路由器
app.use(routes)



// 引入mongoose
require('./config/mongoose')

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Listen and start the app
app.listen(PORT, () => {
  console.log(`The app is listening on http://localhost:${PORT}`)
})