const express = require('express');
const router = express.Router();
const connection = require('../config');

router.post('/', function (req, res) {
  if (req.body) {
    const { prestation } = req.body
    if (!prestation) {
      res.status(400)
      res.send('missing field')
    } else {
      connection.query(`INSERT INTO prestation (prestation_type)
          VALUES  (?)`, [prestation], (err, result) => {
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
  connection.query('SELECT * FROM prestation', function (err,result,){
    if(err){
      res.sendStatus(500)
    } else{
      res.json(result)
    };
  })
})



module.exports = router;





module.exports = router;