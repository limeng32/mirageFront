KISSY.add('test/article/article',["node","test/article/article-view","kg/xtemplate/3.3.3/runtime","test/addition/addition"],function(S ,require, exports, module) {
 var $ = require('node').all;
var tpl = require('test/article/article-view');
var XTemplate = require("kg/xtemplate/3.3.3/runtime");
var addition = require('test/addition/addition');
module.exports = {
    init: function () {
        S.log('article init');
        var html = new XTemplate(tpl).render({
            title: 'this is article' + addition.run(4, 3),
            content: 'render by kg/xtemplate'
        });
        $('article').html(html);
    }
}
});