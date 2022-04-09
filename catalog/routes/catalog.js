const { response } = require('express');
var express = require('express');
var catalog = require('../modules/catalog.js')

var router = express.Router();


router.get('/', function(req, res, next) {
  var categories = catalog.findCategories();
  res.json(categories)
});

router.get('/:categoryId', function(req, res, next) {
  var categories = catalog.findItems(req.params.categoryId)
  if(categories === undefined) {
    res.writeHead(404, {'Content-Type' : 'text/plain'})
    res.end('Not Found')
  } else {
    res.json(categories)
  }
})

router.get('/:categoryId/:itemId', function(req, res, next) {
  var item = catalog.findItem(req.params.categoryId, req.params.itemId)
  if (item === undefined) {
    res.writeHead(404, {'Content-Type' : 'text/plain'})
    res.end('Not found')
  } 
  else {
    res.json(item)
  }
})

module.exports = router;
