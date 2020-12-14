const uselessMiddelware = {
  sayHello: (req, res, next) => {
    console.log('Hello middleware');
    next();
  },
  sayHelloAgain: (req, res, next) => {
    res.send('Hello World');
    next();
  },
};

module.exports = uselessMiddelware;
