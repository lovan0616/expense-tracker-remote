const express = require('express')
const app = express()
const PORT = 3000

const exphbs = require('express-handlebars')

// 引用路由器
const routes = require('./routes')

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