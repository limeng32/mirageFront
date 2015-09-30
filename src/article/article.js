var $ = require('node').all;
var Node = require('node');
var IO = require('io');
var tpl = require('./article-view');
var XTemplate = require("kg/xtemplate/3.3.3/runtime");
var addition = require('../addition/addition');
var Menu = require('menu');
var JSONX = require('../myUtil/jsonx');
module.exports = {
    init: function () {
        var html = new XTemplate(tpl).render({
            title: 'this is article' + addition.run(8, 3),
            content: 'render by kg/xtemplate '
        });
        $('article').html(html);
        var BG = new Node('<div>').addClass('middleBanner');
        BG.append(new Node('<div>').addClass('navigatorSpan').prop(
            {
                id: 'navigatorContainer'
            }));
        $('article').append(BG);
        var menuInit = function () {
            var menu = new Menu({

                    render: '#navigatorContainer',
                    width: 200
                }),
                sb = new Menu.SubMenu({

                    content: '我的淘宝',
                    menu: new Menu.PopupMenu({
                        autoHideOnMouseLeave: true,

                        elStyle: {
                            'color': 'red'
                        },
                        children: [
                            new Menu.Item({

                                content: '已买到的宝贝'
                            }),
                            new Menu.Item({

                                content: '已卖出的宝贝'
                            })
                        ]
                    })
                });

            menu.addChild(sb);
            menu.addChild(new Menu.Item({

                content: '首页'
            }));
            menu.addChild(new Menu.Item({

                content: '购物车'
            }));
            menu.addChild(new Menu.Item({

                content: '退出'
            }));
            menu.render();

            menu.on("click", function (ev) {
                console.log("你选中了" + ev.target.get("content"));
                menu.set("highlightedItem", null);
            });
        };
        menuInit();
    }
};