var $ = require('node').all;
var tpl = require('./article-view');
var XTemplate = require("kg/xtemplate/3.3.3/runtime");
var addition = require('../addition/addition');
module.exports = {
    init: function () {
        S.log('article init1112');
        var html = new XTemplate(tpl).render({
            title: 'this is article' + addition.run(4, 3),
            content: 'render by kg/xtemplate'
        });
        $('article').html(html);
    }
};