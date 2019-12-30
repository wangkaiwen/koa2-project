const Router = require('koa-router');
const ArticleController = require('../controllers/article');

const router = new Router();

/**
 * 文章接口
 */
//创建文章
router.post('/create',ArticleController.create);

//获取文章列表
router.get('/list',ArticleController.list);

//获取文章详情
router.get('/detail/:id',ArticleController.detail);

module.exports = router.routes();