const Sequelize = require('sequelize');
// 引入sequelize对象
const sequelize = require('../config/db');
const Model = Sequelize.Model;
const DataTypes=Sequelize.DataTypes;

class Article extends Model {}

Article.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: true,
        autoIncrement: true
    },
    //文章标题
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'title'
    },
    //作者
    author: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'author'
    },
    //内容
    content: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'content'
    },
    //文章分类
    category: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'category'
    },
},{
    sequelize,
    modelName:'article',
    freezeTableName: true,
});
module.exports = Article;
