var $ = require('node').all;
var tpl = require('./article-view');
var XTemplate = require("kg/xtemplate/3.3.3/runtime");
var addition = require('../addition/addition');
var JSONX = require('../myUtil/jsonx');
module.exports = {
    init: function () {
        var data = '{"maxPageNum":1, "pageItems":[{"bookWriter":[{"book":{"$ref":"$.pageItems[0]"},"writer":{"association":{"id":2,"name":"推理协会","writer":[{"$ref":"$.pageItems[0].bookWriter[0].writer"}]},"bookWriter":[{"$ref":"$.pageItems[0].bookWriter[0]"}],"id":1,"level":{"id":2,"name":"级别二","writer":[{"$ref":"$.pageItems[0].bookWriter[0].writer"},{"association":{"id":1,"name":"新作协7","writer":[{"$ref":"$.pageItems[0].bookWriter[0].writer.level.writer[1]"}]},"bookWriter":[{"book":{"$ref":"$.pageItems[0]"},"writer":{"$ref":"$.pageItems[0].bookWriter[0].writer.level.writer[1]"}}],"id":2,"level":{"$ref":"$.pageItems[0].bookWriter[0].writer.level"},"name":"李四"}]},"name":"王"}},{"$ref":"$.pageItems[0].bookWriter[0].writer.level.writer[1].bookWriter[0]"}],"id":1,"origin":"一","title":"1的故事"}],"pageNo":1}';
        data = JSONX.decode(data);
        var html = new XTemplate(tpl).render({
            title: 'this is article' + addition.run(5, 3),
            content: 'render by kg/xtemplate ' + data.pageItems[0].bookWriter[0].book.title
        });
        $('article').html(html);
    }
};