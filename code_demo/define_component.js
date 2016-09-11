var Vue = require("vue");
/**
 * Vue组件定义 与使用
 */

/**
 * 创建component类
  */
var Profile = Vue.extend({
    template:'<div>Lily</div>'
});

//注册一个tagname  全局注册
Vue.component("me-profile" , Profile);


