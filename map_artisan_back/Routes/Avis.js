const express = require('express');
const router = express.Router();
const connection = require('../config');

router.post('/', function (req, res) {
  if (req.body) {
    const { commentaire, note, artisan_id } = req.body
    if (!commentaire || !note || !artisan_id) {
      res.status(400)
      res.send('missing field')
    } else {
      connection.query(`INSERT INTO avis 
          (commentaire , note, artisan_id)
          VALUES  (?,?,?)`, [commentaire, note, artisan_id], (err, result) => {
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

router.get('/', function (req, res) {
  connection.query('SELECT * FROM avis', function (err,result,){
    if(err){
      res.sendStatus(500)
    } else{
      res.json(result)
    };
  })
})

router.get('/:id', function(req,res){
  connection.query(`SELECT commentaire,note,artisan_id FROM avis WHERE artisan_id = ?`,[req.params.id], function(err,result){
    if(err){
      res.sendStatus(500)
    }else{
      res.json(result)
    };
  })
})

module.exports = router;