const router = require('koa-router')()
const userController = require('../controllers/user');

router.get('/', async (ctx, next) => {
    let data = await userController.getUser();
    await ctx.render('index', {
        title: 'Hello Koa 2!',
        data
    })
})

router.get('string', async (ctx, next) => {
    ctx.body = 'koa2 string'
})

router.get('json', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
})

module.exports = router.routes()
