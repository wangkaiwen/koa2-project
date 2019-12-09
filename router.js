const Router = require('koa-router');
const router=new Router();
const index = require('./routes/index.js');
const users = require('./routes/users');
const api = require('./api/api');


router.use('/', index);//首页
router.use('/api', api);//后端接口

router.use('/users', users);//渲染页面 user
module.exports = router;