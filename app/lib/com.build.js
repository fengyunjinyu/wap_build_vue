/**
 * Vue ��������������
 */
import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';
import UserStore from './user_action.js';

Vue.use(Router);
Vue.use(Resource);

var router = new Router();

Vue.http.interceptors.push(function( request , next){
    //loading.show = true;
    next(function(response){
        //loading.show = false;
        return response;
    });

});

/**
 * 请求之前 判断用户是否登录
 * @param response
 */
Vue.http.options.before = function(response){
    console.log("before");
    var isLogin = UserStore.checkLogin();
    if(!isLogin){
        //router.go({path:'/login'})
    }
    console.log(response);
};

Vue.http.options.root="http://localhost/wap_build_vue/data/";

/**
 * 路由跳转之前
 * 确定该路由是否需要登录，
 * 同时避免登录死循环
 *
 * 创建路由过滤器，在此内的路由将不被过滤
 */

router.beforeEach(function(transition){
    console.log(transition);
    if(transition.to.path==='/forbidden'){
        transition.abort()
    }else if(transition.to.path==='/login'){
        transition.next();

    }else{
        //transition.next();
        if(UserStore.checkLogin()){
            transition.next();
        }else{
            router.go({path:'login'});

        }
    }
});

router.afterEach(function(transition){
    console.log("成功浏览到："+transition.to.path);

})


export {Vue , Router , Resource , router}
