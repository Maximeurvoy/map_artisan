const express = require('express');
const router = express.Router();
const connection = require('../config');


router.get('/',function(req,res){
  connection.query('SELECT * FROM metier', function(err,result){
    if(err){
      res.sendStatus(500)
    }else{
      res.json(result)
    }
  })

})

router.post('/', function (req, res) {
  if (req.body) {
    const { typeArtisanat} = req.body
    if (!typeArtisanat) {
      res.status(400)
      res.send('missing field')
    } else {
      connection.query(`INSERT INTO metier 
          (metier_type)
          VALUES  (?)`, [typeArtisanat], (err, result) => {
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
//   connection.query('SELECT * FROM avis', function (err,result,){
//     if(err){
//       res.sendStatus(500)
//     } else{
//       res.json(result)
//     };
//   })
// })


module.exports = router;