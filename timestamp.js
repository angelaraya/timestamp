
const express = require('express')
const processDate = require('./date_processor')

const app = express()

app.get('/', (req, res) => {
  res.send('Welcome to the timestamp service')
})

app.get('/:date', (req, res) => {
  let date = processDate(req.params.date)
  res.json(date)
})

app.listen(process.env.PORT || 8080, () =>{
  console.log('App listening');
})
