var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/name', function(req, res, next) { 
  res.json({name: "Schakalaka whoop whoop"});
});

module.exports = router;
