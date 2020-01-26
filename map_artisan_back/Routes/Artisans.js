const express = require('express');
const router = express.Router();
const connection = require('../config');
const axios = require('axios')

adressToLatLon = async (number, adress, city) => {
  try {
    const apiKey = 'cRBTog5mofIxlkvzOOfOxEffCfUBEifgKGXuSazoAuc'

    const response = await axios(`https://geocoder.ls.hereapi.com/6.2/geocode.json?apiKey=${apiKey}&searchtext=${number}+${adress}+${city}`);
    if (response) {
      let lat = response.data.Response.View[0].Result[0].Location.DisplayPosition.Latitude
      let lon = response.data.Response.View[0].Result[0].Location.DisplayPosition.Longitude
      let test = [lat, lon]
      console.log(test)
      return test
    }
  } catch (error) {
    throw error
  }
}

router.post('/', async function (req, res) {
  if (req.body) {
    const { entreprise_nom, nom_artisan, prenom_artisan, site_internet, numero, adresse, ville, code_postal, metier_id } = req.body
    if (!entreprise_nom || !nom_artisan || !prenom_artisan || !site_internet || !numero || !adresse || !ville || !code_postal || !metier_id) {
      res.status(400)
      res.send('missing field')
    } else {

      let data = await adressToLatLon(numero, adresse, ville)
      console.log(data)

      connection.query(`INSERT INTO artisan 
          (entreprise_nom , nom_artisan, prenom_artisan , site_internet, numero , adresse , ville , code_postal, metier_id,lat,lon)
          VALUES  (?,?,?,?,?,?,?,?,?,${data[0]},${data[1]})`, [entreprise_nom, nom_artisan, prenom_artisan, site_internet, numero, adresse, ville, code_postal, metier_id], (err, result) => {
        if (err) {
          res.sendStatus(500);
        } else {
          res.sendStatus(200);
        }
      })
    }
  } else {
    res.sendStatus(400)
  }
})

// router.get('/', function (req, res) {
//   connection.query('SELECT * FROM artisan', function (err, result, ) {
//     if (err) {
//       res.sendStatus(500)
//     } else {
//       res.json(result)
//     };
//   })
// })

// router.get('/', function (req, res) {
//   connection.query('SELECT *, artisan.id FROM artisan INNER JOIN metier ON metier.id = artisan.metier_id LEFT JOIN avis ON avis.artisan_id = artisan.id', function (err, result, ) {
//     if (err) {
//       res.sendStatus(500)
//     } else {
//       res.json(result)
//     };
//   })
// })

router.get('/', function (req, res) {
  connection.query('SELECT *, artisan.id FROM artisan INNER JOIN metier ON metier.id = artisan.metier_id LEFT JOIN avis ON avis.artisan_id = artisan.id', function (err, result, ) {
    if (err) {
      res.sendStatus(500)
    } else {
      Array.prototype.groupBy = function (prop) {
        return this.reduce(function (groups, item) {
          const val = item[prop]
          groups[val] = groups[val] || []
          groups[val].push(item)
          return groups
        }, [[null]])
      }
      let listeApi = result.groupBy('id')
      listeApi.splice(0, 1)
      commentaire = listeApi.map(artisan => artisan.map(art => (art.commentaire)))
      note = listeApi.map(artisan => artisan.map(art => (art.note)))
      artisan = listeApi.map(artisan => artisan[0])
      for (i=0;i<artisan.length;i++){
        artisan[i].commentaire =  commentaire[i]
        artisan[i].note = note [i]
        
      }
      res.json(artisan)
    };
  })

})

module.exports = router;