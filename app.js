const express = require('express')
const app = express()

const PORT = 3000

// 引用路由器
const routes = require('./routes')

// 引入mongoose
require('./config/mongoose')

// Listen and start the app
app.listen(PORT, () => {
  console.log(`The app is listening on http://localhost:${PORT}`)
})