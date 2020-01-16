const express = require('express')
const app = express()
const artisans = require('./Routes/Artisans.js')
const bodyParser = require('body-parser');
const cors = require ('cors');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/artisans',artisans);


app.listen(8000, function () {
  console.log('Artisan app listening on port 8000!')
})