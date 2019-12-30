const Router = require('koa-router');
const router = new Router();

const article = require('./article');
const user = require('./user');

router.use('/article', article);
router.use('/user', user);


module.exports = router.routes();
