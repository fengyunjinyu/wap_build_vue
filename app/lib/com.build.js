/**
 * Vue 公共加载启动项
 */
import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';




Vue.use(Router);
Vue.use(Resource);

/**
 * Vue 注册inteceptor 拦截器
 * 所有请求均经过该拦截器
 * @type {string}
 */
Vue.http.interceptors.push(function( request , next){
    //loading.show = true;
    console.log("Hello");
    next(function(response){
        //loading.show = false;
        console.log("JVSC");
        return response;
    });

});

Vue.http.options.before = function(response){
    console.log("before");
    console.log(response);
};

Vue.http.options.root="http://localhost/wap_build_vue/data/";

export {Vue , Router , Resource}
