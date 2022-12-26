const express = require('express');
// const client = require("../redis");
const router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  // const cached = await client.get('quotes');

  console.log('==== users ====');
  res.send('respond with a resource users 22');
});

module.exports = router;
