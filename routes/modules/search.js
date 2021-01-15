const express = require('express')
const router = express.Router()

const Record = require('../../models/record')
router.get('/', (req, res) => {
  const keyword = req.query.search.toLowerCase()
  if(!keyword.trim()) {
    res.redirect('/')
  } else {
    Record.find()
      .lean()
      .then(records => records.filter(record => record.name.toLowerCase().includes(keyword)))
      .then(records => res.render('index', { records }))
  }
})

module.exports = router
