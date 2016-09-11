import Vue from 'vue';
import VueRouter from 'vue-router';
import routerMap from './routes';


Vue.use(VueRouter);

let router = new VueRouter({
    hashbang: true,
    history : false,
    saveScrollPosition:true,
    transitionLoad:true
});

//登录中间验证，页面需要登录而没有登录的情况直接跳转登录
router.beforeEach(function(transition){
    if(transition.to.auth){

        if(localStorage.useId){
            transition.next();
        }else{
            var redirect = encodeURIComponent(transition.to.path);
            transition.redirect('/login?redirect=' + redirect);
        }
    }else{
        transition.next();
    }
})

routerMap(router);

router.start(app , '#app');