KISSY.add('test/index',["test/header/header","test/article/article"],function(S ,require, exports, module) {
 //初始化header模块
var header = require('test/header/header');
header.init();

//初始化article模块
var article = require('test/article/article');
article.init();
});