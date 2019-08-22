let express = require('express');
let router = express.Router();
let burger = require('../models/burger.js');

//create routes

router.get('/', function(req, res){
    burger.all(function(data){
        lethbsObject = {
            cats: data
        };
    });
});

router.post('/api/burgers', function(req, res){
    burger.create([
        'name', "type"
    ], [
        req.body.name, req.body.sleepy
    ], function(result) {
        res.json({id: result.insertId});
    }
    );
});

router.put("/api/burgers/:id", function(req, res) {
let condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.updateOne({ devoured: req.body.devoured }, condition, function(
      result
    ) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  router.delete('/api/burgers/:id', function(req, res){
      let condition = 'id =' + req.params.id;
      console.log('condition', condition);
      burger.deleteOne(condition, function(result){
          if (result.changedRows === condition) {
              return res.status(404).end();
          } else {res.status(200).end();}
      })
  })

  //export
  module.exports = router;
