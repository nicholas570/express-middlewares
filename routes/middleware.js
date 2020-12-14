const router = require('express').Router();
const uselessMiddelware = require('../middlewares/uselessmiddleware');

router.use('/', [uselessMiddelware.sayHello, uselessMiddelware.sayHelloAgain]);

module.exports = router;
