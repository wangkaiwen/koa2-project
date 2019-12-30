const Router = require('koa-router');
const router = new Router();
const userController = require('../controllers/user');

router.get('/',async function (ctx, next) {
    let data = await userController.getUser();
    ctx.body = {
        list:data
    }
});

router.post('/add',async function (ctx, next) {
    let req=ctx.request.body;
    ctx.body = {
        data:req.name+'添加成功'
    }
});
module.exports = router.routes();