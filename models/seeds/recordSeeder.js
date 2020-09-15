const Record = require('../record')
const recordList = require('./record.json')

const db = require('../../config/mongoose')
db.once('open', () => {
  for (let i = 0; i < recordList.results.length; i++) {
    Record.create({
      name: `${recordList.results[i].name}`,
      category: `${recordList.results[i].category}`,
      date: `${recordList.results[i].date}`,
      amount: `${recordList.results[i].amount}`
    })
  }
  console.log( 'record seed done')
})