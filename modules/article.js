const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// 引入数据表模型
const Article = require('../schema/article');
// Article.sync({force: false}); //同步表
class ArticleModel {
    /**
     * 创建文章模型
     * @param data
     * @returns {Promise<*>}
     */
    static async createArticle(data){
        return await Article.create({
            title: data.title, //标题
            author: data.author,  //作者
            content: data.content,  //文章内容
            category: data.category //文章分类
        });
    }

    /**
     * 查询文章的详情
     * @param id 文章ID
     * @returns {Promise<Model>}
     */
    static async getArticleDetail(id){
        return await Article.findOne({
            where:{
                id
            }
        });
    }

    /**
     * 查询文章列表
     * @param query 查询参数  文章标题 模糊查询 分页数据
     * @returns {Promise<Model>}
     */
    static async getArticleList({title='',pageSize=10,pageIndex=1}){
        return await Article.findAndCountAll({
            limit:Number(pageSize),
            offset:Number((pageIndex-1)*pageSize),
            where:{
                title:{
                    [Op.like]:'%'+title+'%'
                }
            }
        });
    }
}

module.exports = ArticleModel;