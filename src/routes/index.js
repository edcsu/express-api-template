let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
  return res.status(200).json({ message: 'Welcome to Express API template' });
});

module.exports = router;
