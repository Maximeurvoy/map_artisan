const express = require('express')
const app = express()
const artisans = require('./Routes/Artisans.js')
const avis = require('./Routes/Avis.js')
const prestations = require('./Routes/Prestations.js')

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/avis', avis);
app.use('/artisans', artisans);
app.use('/prestations',prestations)


app.listen(8000, function () {
  console.log('Artisan app listening on port 8000!')
})