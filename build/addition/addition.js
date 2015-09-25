KISSY.add('test/addition/addition',["button"],function(S ,require, exports, module) {

    var Button = require('button');
    exports.run = function (a, b) {
        return a + b;
    };
});