const router = require('express').Router();
const uselessMiddelware = require('../middlewares/uselessmiddleware');

router.use(
  '/',
  [uselessMiddelware.sayHello, uselessMiddelware.sayHelloAgain],
  (req, res) => {}
);

module.exports = router;
