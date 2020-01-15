const express = require('express');
const router = express.Router();
const connection = require('../config');

router.post('/', function (req, res) {
  if (req.body) {
    const { entreprise_nom, nom_artisan, prenom_artisan, site_internet, numero, adresse, ville, metier_id, prestation_id } = req.body
    if (!entreprise_nom || !nom_artisan || !prenom_artisan || !site_internet || !numero || !adresse || !ville || !metier_id || !prestation_id) {
      res.status(400)
      res.send('missing field')
    } else {
      connection.query(`INSERT INTO artisan 
          (entreprise_nom , nom_artisan, prenom_artisan , site_internet, numero , adresse , ville , metier_id ,prestation_id)
          VALUES  (?,?,?,?,?,?,?,?,?)`, [entreprise_nom, nom_artisan, prenom_artisan, site_internet, numero, adresse, ville, metier_id, prestation_id], (err, result) => {
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

router.get('/',function (req,res){
    connection.query('SELECT * FROM artisan',function (err,result,){
      if(err){
        res.sendStatus(500)
      } else{
        res.json(result)
      };
    })
  
})

module.exports = router;