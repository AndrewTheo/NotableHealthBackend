const express = require('express');
const data = require('./data.json');
const cors = require('cors');
const fs = require('fs');


const app = express()
app.use(cors())
const port = 8080


app.get('/', (req, res) => {
  res.send('Hello world')
})

app.get('/doctors', (req, res) => {
  let database = fs.readFileSync('data.json');
  let data = JSON.parse(database);
  var doctors = [];
  for(doctorId in data)
  {
  	doctors.push({"name":data[doctorId]["Name"], "id": doctorId});
  }
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(doctors));
})


app.get('/doctors/:id', (req, res) => {
  let database = fs.readFileSync('data.json');
  let doctors = JSON.parse(database);
  res.send(JSON.stringify(doctors[req.params.id]));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
