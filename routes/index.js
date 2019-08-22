const express = require('express');
const router = express.Router();
// Se puede usar solo una linea: const router = require('express').Router();
const tweetBank = require('../tweetBank');
router.get('/', function (req, res) {
  
  let tweets = tweetBank.list();
  res.render( 'index.html', { tweets: tweets } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( { name: name } );
  res.render( 'index.html', { tweets: list } );
});

router.get('/tweets/:id', function(req, res) {
  var id = parseInt(req.params.id);

  var list = tweetBank.find( { id: id } );
  res.render( 'index.html', { tweets: list } );
});

module.exports = router;